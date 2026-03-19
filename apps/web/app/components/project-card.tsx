// ABOUTME: Project card component for displaying personal projects.
// ABOUTME: Single-column bordered cards with optional "coming soon" label and link.

import { Link } from '@remix-run/react';

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string;
  href?: string;
  githubHref?: string;
  comingSoon?: boolean;
}

export function ProjectStack({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-sm">{children}</div>;
}

export function ProjectCard({
  name,
  description,
  stack,
  href,
  githubHref,
  comingSoon,
}: ProjectCardProps) {
  const className =
    'block p-md border border-border rounded-lg no-underline transition-colors duration-300 hover:border-faint';

  const heading = (
    <div className="flex items-center justify-between mb-xs">
      <h3 className="font-serif text-copy text-lg leading-snug">{name}</h3>
      {comingSoon && (
        <span className="text-[0.625rem] font-medium uppercase tracking-widest text-faint">
          Coming soon
        </span>
      )}
    </div>
  );

  const body = <p className="text-sm text-muted leading-relaxed mb-xs">{description}</p>;

  const footer = (
    <div className="flex items-center justify-between">
      <p className="text-xs text-faint italic">{stack}</p>
      <div className="flex items-center gap-sm">
        {href && githubHref && (
          <Link
            to={href}
            className="text-xs text-faint hover:text-muted transition-colors duration-300"
          >
            Read &rarr;
          </Link>
        )}
        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-faint hover:text-muted transition-colors duration-300"
          >
            GitHub &rarr;
          </a>
        )}
      </div>
    </div>
  );

  const content = (
    <>
      {heading}
      {body}
      {footer}
    </>
  );

  if (href && !githubHref) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
