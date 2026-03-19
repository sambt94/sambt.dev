// ABOUTME: Main page layout with max-width container and spacing.
// ABOUTME: Wraps all page content with consistent padding and width constraint.

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <main className="max-w-content mx-auto px-md pb-xl">{children}</main>;
}
