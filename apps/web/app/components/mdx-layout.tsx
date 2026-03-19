// ABOUTME: Layout wrapper for rendered MDX article content.
// ABOUTME: Provides article-appropriate typography via prose-like class overrides.

import { Link } from '@remix-run/react';
import { EmailSubscribe } from './email-subscribe';

interface MdxLayoutProps {
  title: string;
  date: string;
  type: 'case-study' | 'essay';
  children: React.ReactNode;
}

const typeLabels: Record<string, string> = {
  'case-study': 'Case Study',
  essay: 'Thoughts',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function MdxLayout({ title, date, type, children }: MdxLayoutProps) {
  return (
    <article className="stagger-children">
      <Link
        to="/writing"
        className="inline-block text-xs text-faint hover:text-muted transition-colors duration-300 mb-lg no-underline"
      >
        ← Back to Writing
      </Link>

      <header className="mb-lg">
        <span className="inline-block text-[0.625rem] font-medium uppercase tracking-widest text-faint mb-xs">
          {typeLabels[type] || type}
        </span>
        <h1
          className="font-serif font-light leading-tight tracking-tight"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
        >
          {title}
        </h1>
        <p className="mt-sm text-xs text-faint">{formatDate(date)}</p>
      </header>

      <div className="border-t border-border pt-lg" />

      <div className="mdx-content space-y-6 text-copy leading-relaxed [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-light [&_h3]:mt-10 [&_h3]:mb-3 [&_p]:text-[0.9375rem] [&_p]:leading-[1.8] [&_a]:underline [&_a]:decoration-faint/40 hover:[&_a]:decoration-faint [&_a]:transition-colors [&_a]:duration-300 [&_blockquote]:border-l-[3px] [&_blockquote]:border-border [&_blockquote]:pl-md [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-muted [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-2 [&_li]:text-[0.9375rem] [&_li]:leading-[1.8] [&_li]:text-muted [&_code]:bg-pill [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-pill [&_pre]:border [&_pre]:border-border [&_pre]:p-md [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-8 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_hr]:border-border [&_hr]:my-12 [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-8 [&_strong]:text-copy [&_strong]:font-medium [&_table]:w-full [&_table]:text-sm [&_table]:my-8 [&_th]:text-left [&_th]:text-faint [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wide [&_th]:pb-2 [&_th]:border-b [&_th]:border-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-muted [&_td]:border-b [&_td]:border-border/50">
        {children}
      </div>

      <EmailSubscribe />

      <div className="border-t border-border mt-xl pt-md">
        <Link
          to="/writing"
          className="text-copy hover:text-muted transition-colors duration-300 no-underline"
        >
          ← Back to Writing
        </Link>
      </div>
    </article>
  );
}
