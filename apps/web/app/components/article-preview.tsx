// ABOUTME: Preview card for an article on the Writing index page.
// ABOUTME: Shows type badge, title, summary, and formatted date with link to full article.

import { Link } from '@remix-run/react';

interface ArticlePreviewProps {
  slug: string;
  title: string;
  type: 'case-study' | 'essay';
  date: string;
  summary: string;
}

const typeLabels: Record<string, string> = {
  'case-study': 'Case Study',
  essay: 'Essay',
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ArticlePreview({ slug, title, type, date, summary }: ArticlePreviewProps) {
  return (
    <Link to={`/writing/${slug}`} className="block border-t border-border py-md group no-underline">
      <span className="inline-block text-[0.625rem] font-medium uppercase tracking-widest text-faint mb-xs">
        {typeLabels[type] || type}
      </span>
      <h3 className="font-serif text-copy text-lg leading-snug mb-xs">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-sm">{summary}</p>
      <span className="text-xs text-faint">{formatDate(date)}</span>
    </Link>
  );
}
