// ABOUTME: Email subscribe form for bottom of articles.
// ABOUTME: POSTs to /api/subscribe which adds contacts to Resend Newsletter segment.

import { useState } from 'react';

export function EmailSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage("You're in. I'll let you know when there's something new.");
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Try again?');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again?');
    }
  }

  return (
    <div className="mt-xl pt-lg border-t border-border">
      <p className="text-[0.9375rem] text-muted leading-[1.75] mb-sm">
        If you want to follow along, leave your email below. No spam, just new posts when they're
        ready.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3 mt-sm max-w-[420px]">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-3.5 py-2.5 font-sans text-[0.9375rem] font-light text-copy bg-transparent border border-border rounded-md outline-none transition-colors duration-200 placeholder:text-faint focus:border-muted"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-5 py-2.5 font-sans text-[0.9375rem] font-normal text-surface bg-copy border-none rounded-md cursor-pointer transition-opacity duration-200 whitespace-nowrap hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? '...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="text-sm text-muted mt-2">{message}</p>}
    </div>
  );
}
