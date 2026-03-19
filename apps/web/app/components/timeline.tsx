// ABOUTME: Timeline component for displaying professional experience entries.
// ABOUTME: Supports nested sub-entries, em-dash bullets, and hover-dim siblings.

interface TimelineEntryProps {
  date: string;
  title: string;
  company: string;
  description?: string;
  children: React.ReactNode;
}

interface TimelineSubEntryProps {
  name: string;
  date: string;
  children: React.ReactNode;
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="hover-dim-group">{children}</div>;
}

export function TimelineEntry({ date, title, company, description, children }: TimelineEntryProps) {
  return (
    <div className="py-md border-t border-border last:border-b last:border-border">
      <p className="text-[0.8125rem] text-muted mb-xs">{date}</p>
      <h3 className="text-copy text-base font-normal mb-xs">
        {title} <span className="text-muted">·</span> <span className="text-muted">{company}</span>
      </h3>
      {description && <p className="text-sm text-muted leading-relaxed mb-sm">{description}</p>}
      <ul className="cv-bullets text-sm text-muted leading-relaxed list-none">{children}</ul>
    </div>
  );
}

export function TimelineSubEntry({ name, date, children }: TimelineSubEntryProps) {
  return (
    <li className="mt-md pl-md border-l border-border">
      <p className="text-copy text-[0.9375rem] font-normal mb-[0.125rem]">{name}</p>
      <p className="text-xs text-muted italic mb-[0.375rem]">{date}</p>
      <ul className="cv-bullets text-sm text-muted leading-relaxed list-none">{children}</ul>
    </li>
  );
}
