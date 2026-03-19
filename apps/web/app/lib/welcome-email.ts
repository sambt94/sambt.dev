// ABOUTME: Welcome email HTML template sent after subscribing at sambt.dev.
// ABOUTME: Matches the newsletter design system. Generated from apps/email/emails/welcome.tsx.

export const WELCOME_EMAIL_SUBJECT = 'Thanks for subscribing';

export const WELCOME_EMAIL_TEXT = `Hey! Thanks for subscribing.

All future emails from me will try to be at least somewhat useful, and maybe even funny. Never any spam.

If you subscribed by mistake, simply drop a reply to this message and I'll take you off the list. It's a small list — feels a bit personal but nice.

In the meantime, there's some writing at https://sambt.dev/writing if you want a head start.

Sam

—
You're getting this because you signed up at sambt.dev. Reply to this email if you'd like to unsubscribe.`;

export const WELCOME_EMAIL_HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <style>
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      mso-font-alt: 'Helvetica';
      src: url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2) format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      mso-font-alt: 'Helvetica';
      src: url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2) format('woff2');
    }
    @font-face {
      font-family: 'Newsreader';
      font-style: normal;
      font-weight: 400;
      mso-font-alt: 'Georgia';
      src: url(https://fonts.gstatic.com/s/newsreader/v21/cY9qfjOCX1hbuyalUrK439vogpk9.woff2) format('woff2');
    }
    @media (prefers-color-scheme: dark) {
      .email-body { background-color: #1a1a1a !important; }
      .email-container { background-color: #0e0e0e !important; border-color: #222222 !important; }
      .email-heading { color: #e8e8e8 !important; }
      .email-text { color: #e8e8e8 !important; }
      .email-muted { color: #bbbbbb !important; }
      .email-faint { color: #666666 !important; }
      .email-hr { border-color: #222222 !important; }
      .email-link { color: #e8e8e8 !important; }
      .email-footer-link { color: #666666 !important; }
    }
  </style>
</head>
<body class="email-body" style="background-color:#e8e3d8;margin:0">
  <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
    <tbody><tr><td style="background-color:#e8e3d8;font-family:Inter,Helvetica,-apple-system,BlinkMacSystemFont,sans-serif;margin:0;padding:40px 0;-webkit-font-smoothing:antialiased">
      <table align="center" width="100%" class="email-container" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;background-color:#f5efe4;margin:0 auto;padding:48px 40px;border:1px solid #e0d8cb;border-radius:2px">
        <tbody><tr style="width:100%"><td>

          <!-- Header -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:48px">
            <tbody><tr><td>
              <p class="email-muted" style="font-size:13px;line-height:24px;font-family:Inter,Helvetica,sans-serif;font-weight:400;letter-spacing:0.05em;text-transform:uppercase;color:#444444;margin:0">Sam Middleton Beattie</p>
            </td></tr></tbody>
          </table>

          <!-- Title -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:32px">
            <tbody><tr><td>
              <h1 class="email-heading" style="font-family:Newsreader,Georgia,serif;font-size:28px;font-weight:400;line-height:1.3;color:#1a1a1a;margin:0">Thanks for subscribing</h1>
            </td></tr></tbody>
          </table>

          <!-- Body -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody><tr><td>
              <p class="email-text" style="font-size:16px;line-height:1.7;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#1a1a1a;margin:0 0 20px 0">Hey! Thanks for subscribing.</p>
              <p class="email-text" style="font-size:16px;line-height:1.7;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#1a1a1a;margin:0 0 20px 0">All future emails from me will try to be at least somewhat useful, and maybe even funny. Never any spam.</p>
              <p class="email-text" style="font-size:16px;line-height:1.7;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#1a1a1a;margin:0 0 20px 0">If you subscribed by mistake, simply drop a reply to this message and I&#8217;ll take you off the list. It&#8217;s a small list &#8212; feels a bit personal but nice.</p>
              <p class="email-text" style="font-size:16px;line-height:1.7;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#1a1a1a;margin:0 0 20px 0">In the meantime, there&#8217;s some writing at <a class="email-link" href="https://sambt.dev/writing" style="color:#1a1a1a;text-decoration:underline" target="_blank">sambt.dev/writing</a> if you want a head start.</p>
              <p class="email-text" style="font-size:16px;line-height:1.7;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#1a1a1a;margin:0">Sam</p>
            </td></tr></tbody>
          </table>

          <!-- Divider -->
          <hr class="email-hr" style="width:100%;border:none;border-top:1px solid #e0d8cb;margin:48px 0 24px 0"/>

          <!-- Footer -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody><tr><td>
              <p class="email-faint" style="font-size:12px;line-height:1.6;font-family:Inter,Helvetica,sans-serif;font-weight:300;color:#999999;margin:0">You&#8217;re getting this because you signed up at <a class="email-footer-link" href="https://sambt.dev" style="color:#999999;text-decoration:underline" target="_blank">sambt.dev</a>. Reply to this email if you&#8217;d like to unsubscribe.</p>
            </td></tr></tbody>
          </table>

        </td></tr></tbody>
      </table>
    </td></tr></tbody>
  </table>
</body>
</html>`;
