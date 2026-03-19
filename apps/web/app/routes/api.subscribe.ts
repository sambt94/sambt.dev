// ABOUTME: Server-side API route for email subscriptions via Resend.
// ABOUTME: Accepts POST with email, creates contact, adds to Newsletter segment, and sends welcome email.

import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { WELCOME_EMAIL_SUBJECT, WELCOME_EMAIL_TEXT, WELCOME_EMAIL_HTML } from '~/lib/welcome-email';

const RESEND_API_URL = 'https://api.resend.com';
const NEWSLETTER_SEGMENT_ID = '481a510a-a075-4cbb-a941-5571ec3a6f26';
const FROM_EMAIL = 'Sam Middleton Beattie <sam@sambt.dev>';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const email = body.email?.trim();

    if (!email || !email.includes('@')) {
      return json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Step 1: Create contact in Resend
    const createRes = await fetch(`${RESEND_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const isNewContact = createRes.ok;

    if (!createRes.ok) {
      const err = await createRes.text();
      // 409 means contact already exists — that's fine, continue to add segment
      if (createRes.status !== 409) {
        console.error('Resend create contact failed:', err);
        return json({ error: 'Failed to subscribe' }, { status: 500 });
      }
    }

    // Step 2: Add contact to Newsletter segment (by email)
    const segmentRes = await fetch(
      `${RESEND_API_URL}/contacts/${encodeURIComponent(email)}/segments/${NEWSLETTER_SEGMENT_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!segmentRes.ok) {
      const err = await segmentRes.text();
      console.error('Resend add to segment failed:', err);
      return json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    // Step 3: Send welcome email (only for new subscribers)
    // Brief pause to avoid Resend's 2 req/sec rate limit after Steps 1+2
    if (isNewContact) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const emailRes = await fetch(`${RESEND_API_URL}/emails`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [email],
          subject: WELCOME_EMAIL_SUBJECT,
          html: WELCOME_EMAIL_HTML,
          text: WELCOME_EMAIL_TEXT,
        }),
      });

      if (!emailRes.ok) {
        // Log but don't fail the subscription — contact is already created
        const err = await emailRes.text();
        console.error('Resend welcome email failed:', err);
      }
    }

    return json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return json({ error: 'Something went wrong' }, { status: 500 });
  }
}
