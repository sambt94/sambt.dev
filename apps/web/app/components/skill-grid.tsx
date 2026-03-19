// ABOUTME: Skill grid component for displaying capability categories.
// ABOUTME: Each card shows category name, description, and tool list.

interface SkillCardProps {
  category: string;
  description: string;
  tools: string;
}

export function SkillGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-md hover-dim-group">{children}</div>;
}

export function SkillCard({ category, description, tools }: SkillCardProps) {
  return (
    <div className="space-y-xs">
      <h3 className="text-copy text-sm font-medium">{category}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <p className="text-xs text-faint">{tools}</p>
    </div>
  );
}
