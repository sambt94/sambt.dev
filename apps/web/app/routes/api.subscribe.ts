// ABOUTME: Server-side API route for email subscriptions via Resend.
// ABOUTME: Accepts POST with email, creates contact in Newsletter segment.

import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

const RESEND_API_URL = 'https://api.resend.com';
const NEWSLETTER_SEGMENT_ID = '481a510a-a075-4cbb-a941-5571ec3a6f26';

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

    // Create contact in Resend
    const createRes = await fetch(`${RESEND_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!createRes.ok) {
      const err = await createRes.text();
      console.error('Resend create contact failed:', err);
      return json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    const contact = await createRes.json();

    // Add contact to Newsletter segment
    const segmentRes = await fetch(`${RESEND_API_URL}/segments/${NEWSLETTER_SEGMENT_ID}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contactId: contact.id }),
    });

    if (!segmentRes.ok) {
      const err = await segmentRes.text();
      console.error('Resend add to segment failed:', err);
      // Contact was created, just not added to segment — still a partial success
    }

    return json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return json({ error: 'Something went wrong' }, { status: 500 });
  }
}
