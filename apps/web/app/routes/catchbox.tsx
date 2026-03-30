// ABOUTME: Unlisted proposal page for Catchbox CCO trial — April 2026.
// ABOUTME: Standalone layout (no nav/header) with pitch, timeline, and contact.

import type { MetaFunction } from '@remix-run/node';

export const handle = { hideChrome: true };

export const meta: MetaFunction = () => [
  { title: 'Catchbox CCO × Sam' },
  { name: 'robots', content: 'noindex, nofollow' },
];

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-lg border-t border-border ${className}`}>{children}</section>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-normal text-muted uppercase tracking-widest mb-md">{children}</p>
  );
}

function WeekCard({
  week,
  title,
  description,
}: {
  week: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-md border border-border rounded-sm">
      <p className="text-xs text-faint uppercase tracking-widest mb-xs">{week}</p>
      <h3 className="text-copy text-base font-normal mb-xs">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function TimelineVisual() {
  const steps = [
    { label: 'Week 1', title: 'Listen & Learn' },
    { label: 'Week 2', title: 'Recommend' },
    { label: 'Weeks 3–4', title: 'Build' },
  ];

  return (
    <div className="my-md">
      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Connecting line — sits behind the dots */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{ top: '6px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />
          {/* Step nodes */}
          <div className="relative flex justify-between">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className="w-3 h-3 rounded-full relative z-10"
                  style={{ backgroundColor: '#ffffff' }}
                />
                <p className="text-xs text-faint uppercase tracking-widest mt-1.5">{step.label}</p>
                <p className="text-xs text-copy mt-0.5">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-md">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              style={{ color: '#ffffff' }}
            >
              <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
            </svg>
            <p className="text-sm font-normal" style={{ color: '#ffffff' }}>
              Informed perspective on the CCO role
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div
                className="w-2.5 h-2.5 rounded-full flex-none"
                style={{ backgroundColor: '#ffffff' }}
              />
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-none"
                  style={{ height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                />
              )}
            </div>
            <div className="-mt-0.5 pb-2">
              <p className="text-xs text-faint uppercase tracking-widest">{step.label}</p>
              <p className="text-xs text-copy">{step.title}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2 ml-0.5">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ color: '#ffffff' }}>
            <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
          </svg>
          <p className="text-xs" style={{ color: '#ffffff' }}>
            Informed perspective on the CCO role
          </p>
        </div>
      </div>
    </div>
  );
}

function DataDiagram() {
  const sources = [
    'HubSpot CRM',
    'E-commerce Store',
    'Customer Support',
    'Sales Conversations',
    'Marketing Content',
    'Partner / Distributor Data',
  ];

  return (
    <div className="my-md">
      {/* Scattered data sources */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center mb-4">
        {sources.map((source, i) => (
          <span
            key={i}
            className="text-xs text-muted border rounded-sm px-2 py-1"
            style={{ borderColor: 'rgba(255, 255, 255, 0.25)' }}
          >
            {source}
          </span>
        ))}
      </div>

      {/* Converging lines into AI layer */}
      <div className="flex flex-col items-center">
        <svg
          width="160"
          height="28"
          viewBox="0 0 160 28"
          fill="none"
          style={{ color: 'rgba(255, 255, 255, 0.3)' }}
        >
          <path d="M20 2 L80 24" stroke="currentColor" strokeWidth="0.75" />
          <path d="M50 2 L80 24" stroke="currentColor" strokeWidth="0.75" />
          <path d="M80 2 L80 24" stroke="currentColor" strokeWidth="0.75" />
          <path d="M110 2 L80 24" stroke="currentColor" strokeWidth="0.75" />
          <path d="M140 2 L80 24" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        <div
          className="border rounded-sm px-4 py-1.5 text-center"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          <p className="text-xs text-copy uppercase tracking-widest">AI layer</p>
        </div>

        <svg
          width="2"
          height="20"
          viewBox="0 0 2 20"
          fill="none"
          style={{ color: 'rgba(255, 255, 255, 0.3)' }}
        >
          <path d="M1 0v20" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        <div className="text-center mt-1">
          <p className="text-xs" style={{ color: '#ffffff' }}>
            Unified commercial intelligence
          </p>
        </div>
      </div>
    </div>
  );
}
export default function Catchbox() {
  return (
    <main className="max-w-content mx-auto px-md pb-xl">
      <div className="space-y-0 stagger-children">
        {/* Header */}
        <header className="pt-xl pb-lg">
          <p className="text-xs text-faint uppercase tracking-widest mb-sm">Proposal</p>
          <h1
            className="font-serif font-light leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Catchbox CCO × Sam
          </h1>
        </header>

        {/* The Pitch */}
        <Section>
          <SectionLabel>The pitch</SectionLabel>
          <div className="space-y-sm">
            <p className="text-sm text-muted leading-relaxed">
              The CCO role at Catchbox shouldn’t start by trying to do more. It should start by
              enabling the talented people already there to do more with what they have.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Catchbox has always done a lot with very few resources. The commercial team is
              stretched. Development has been a bottleneck for years. Data lives in HubSpot but
              isn’t easy to use. The website has been “about to be redone” for four years.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              There’s been a sea change in what’s possible with AI tools. Not in a vague, futuristic
              sense. Right now. Catchbox is a physical product company, but the commercial operation
              is digital — sales, marketing, CRM, content, data — all of it runs through digital
              tools. And that’s where the opportunity is. Take a talented but stretched commercial
              team and give them the ability to do significantly more with the same resources. Not
              by hiring more people. By reworking the systems, connecting the data, and building the
              infrastructure that enables future growth.
            </p>
          </div>
        </Section>

        {/* Why Me */}
        <Section>
          <SectionLabel>Why me</SectionLabel>
          <div className="space-y-md">
            <div>
              <h3 className="text-copy text-base font-normal mb-xs">I know Catchbox.</h3>
              <div className="space-y-sm">
                <p className="text-sm text-muted leading-relaxed">
                  I was Head of Marketing during the hardest period the company faced. When COVID
                  hit, I spotted an emerging angle — hybrid learning in higher education — and we
                  built the strategy around it. We got Catchbox back to and beyond pre-COVID
                  revenue, with almost all of that growth coming from the higher education sector.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  I see the same kind of opportunity now. Back then it was a market shift I
                  recognised early and acted on. This time it’s AI — and I’ve taken the same
                  approach: spot it, learn it, build with it, and bring it back to a company I
                  believe in.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Easter egg:{' '}
                  <strong className="text-copy">
                    Google “hybrid classroom.” The article I wrote for Catchbox in 2020 is still the
                    #1 result, six years later.
                  </strong>
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  I know the team, the products, the market, and the challenges. I would come into
                  this with a fresh but informed perspective — I understand what works at Catchbox,
                  and I have ideas about how to make it flourish.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-copy text-base font-normal mb-xs">I’ve invested in the tools.</h3>
              <div className="space-y-sm">
                <p className="text-sm text-muted leading-relaxed">
                  I’ve spent the last few years working in software — product, growth, marketing —
                  at companies like Whimsical, Uxcel, and Kitbash3D. Good work, good teams. But I
                  could see how much more was possible with AI, and I felt like I was barely
                  scratching the surface. So earlier this year, I left my last role to get ahead of
                  it.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  I learned Python. I built MCP servers (an API protocol for connecting AI to
                  external tools and data). I worked with OAuth 2.0 authentication. I shipped real
                  tools I use every day. I’ve been sharing the journey on{' '}
                  <a
                    href="https://sambt.dev/writing"
                    className="text-copy hover:text-muted transition-colors duration-300 underline underline-offset-2"
                  >
                    my website
                  </a>{' '}
                  (which I built myself) and publishing the code on{' '}
                  <a
                    href="https://github.com/sambt94"
                    className="text-copy hover:text-muted transition-colors duration-300 underline underline-offset-2"
                  >
                    GitHub
                  </a>
                  .
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  I’m not pitching what AI could theoretically do. I’ve done the work to be ready.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* My Proposal */}
        <Section>
          <SectionLabel>My proposal</SectionLabel>
          <div className="space-y-sm mb-md">
            <p className="text-sm text-muted leading-relaxed">
              In April, I come in and work alongside the commercial team. The goal is twofold: make
              some quick wins that demonstrate the approach, and show that I’m the right person to
              lead this operation going forward.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              I know you might be looking for someone with more traditional CCO experience. But I
              believe what Catchbox needs right now isn’t a playbook from a bigger company. It’s
              someone who knows this business, knows these people, and has the skills to
              fundamentally change how the commercial team operates. That’s what I’m here to prove.
            </p>
          </div>
          <TimelineVisual />
          <div className="grid gap-sm">
            <WeekCard
              week="Week 1"
              title="Listen"
              description="Learn what’s changed. Sit with sales, marketing, ops. Map the real pain points. Understand the HubSpot setup, current workflows, what’s working and what isn’t."
            />
            <WeekCard
              week="Week 2"
              title="Recommend"
              description="Present findings. Identify the top opportunities where AI tools can save time or unblock things. Prioritise by impact and effort."
            />
            <WeekCard
              week="Weeks 3–4"
              title="Build"
              description="Deliver working solutions, not slide decks. Connect HubSpot to AI for the sales team. Unblock website progress. Automate manual workflows. Plus a roadmap for what comes next."
            />
          </div>
        </Section>

        {/* Knowledge & Connection */}
        <Section>
          <SectionLabel>Throughout: knowledge and connection</SectionLabel>
          <div className="space-y-sm">
            <p className="text-sm text-muted leading-relaxed">
              This isn’t a “Sam comes in and does magic” engagement. Two things run through all four
              weeks:
            </p>
            <div className="pl-md border-l border-border space-y-sm">
              <div>
                <p className="text-copy text-sm font-normal">Connecting teams and data.</p>
                <p className="text-sm text-muted leading-relaxed">
                  Sales data in HubSpot, marketing content, customer insights — right now these
                  likely live in silos. AI can create a shared layer where anyone on the commercial
                  team can access and use this information. That’s not a product to install, it’s a
                  way of working.
                </p>
                <DataDiagram />
              </div>
              <div>
                <p className="text-copy text-sm font-normal">Teaching by doing.</p>
                <p className="text-sm text-muted leading-relaxed">
                  The team learns how to work with AI tools alongside me, not in a training
                  workshop. By the end of the month, the foundations are in place so this isn’t
                  dependent on one person. The goal is literacy — the team understands how to
                  identify problems worth solving with AI, how to connect their tools, and how to
                  get meaningful use out of them.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* The Ask */}
        <Section>
          <SectionLabel>The ask</SectionLabel>
          <div className="space-y-sm">
            <p className="text-sm text-muted leading-relaxed">
              No fee for this. I believe in what Catchbox is building, I believe I’m the right
              person for the CCO role, and I want to prove it. If April goes well, we talk about the
              role properly.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              I’m available for the whole month of April.
            </p>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-lg border-t border-border">
          <div className="space-y-xs">
            <p className="text-sm text-copy">Sam Middleton Beattie</p>
            <p className="text-sm text-muted">
              <a
                href="mailto:sammiddletonbeattie@gmail.com"
                className="hover:text-copy transition-colors duration-300"
              >
                sammiddletonbeattie@gmail.com
              </a>{' '}
              · +37122097155
            </p>
            <p className="text-sm text-muted">
              <a
                href="https://sambt.dev"
                className="hover:text-copy transition-colors duration-300"
              >
                sambt.dev
              </a>{' '}
              ·{' '}
              <a
                href="https://github.com/sambt94"
                className="hover:text-copy transition-colors duration-300"
              >
                github.com/sambt94
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
