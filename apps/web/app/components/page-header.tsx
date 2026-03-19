// ABOUTME: Shared page header with serif title and optional subtitle.
// ABOUTME: Accepts string or ReactNode title (for WordReveal animation).

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-lg">
      <h1
        className="font-serif font-light leading-tight tracking-tight"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
      >
        {title}
      </h1>
      {subtitle && <p className="mt-sm text-sm text-muted leading-relaxed">{subtitle}</p>}
    </header>
  );
}
