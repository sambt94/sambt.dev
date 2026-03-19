// ABOUTME: Persistent name/role header visible on all pages.
// ABOUTME: Matches old site's header block at top of content area.

export function SiteHeader() {
  return (
    <div className="max-w-content mx-auto px-md pt-xl opacity-0 animate-fade-in">
      <div className="mb-md">
        <p className="text-sm font-normal text-copy tracking-[0.01em]">Sam Middleton Beattie</p>
        <p className="text-[0.8125rem] text-muted">Product &amp; Growth</p>
      </div>
    </div>
  );
}
