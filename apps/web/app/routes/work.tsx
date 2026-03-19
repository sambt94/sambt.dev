// ABOUTME: Work page — professional CV with timeline, skills grid, and education.
// ABOUTME: Static content composed from Timeline, SkillGrid, and PageHeader components.

import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { PageContainer } from '~/components/layout';
import { PageHeader } from '~/components/page-header';
import { Timeline, TimelineEntry, TimelineSubEntry } from '~/components/timeline';
import { SkillGrid, SkillCard } from '~/components/skill-grid';
import { buildMeta } from '~/lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Work',
    description: 'The full professional timeline — product, growth, and building with AI.',
    path: '/work',
  });

export default function Work() {
  return (
    <PageContainer>
      <div className="space-y-xl stagger-children">
        <PageHeader title="Experience" />
        {/* Experience */}
        <section>
          <h2 className="text-xs font-normal text-muted uppercase tracking-widest mb-md">
            Experience
          </h2>
          <Timeline>
            <TimelineEntry
              date="Jun 2025 — Jan 2026"
              title="Product & Growth Lead"
              company="Health & Wellness Startup"
            >
              <li>
                Designed a personalised in-app activation initiative and proved its impact on user
                engagement through A/B testing
              </li>
              <li>
                Built a cascading notification system targeting users by engagement level to improve
                retention
              </li>
              <li>
                Led growth for a new product — designed an extensive beta program with user research
                across 100+ data points
              </li>
              <li>
                Created launch and lifecycle communications infrastructure, including a modular
                email design system with 20+ responsive components
              </li>
            </TimelineEntry>

            <TimelineEntry date="Dec 2024 — Jun 2025" title="Co-founder" company="Pulss">
              <li>
                Co-founded a brand analytics startup targeting an underserved gap in local market
                brand measurement
              </li>
              <li>
                Secured enterprise clients through founder-led outreach and validation across 100+
                companies
              </li>
              <li>
                Took initial designs through product iteration and user feedback to a live, working
                product with authentication and client access
              </li>
              <li>
                Built an AI integration that let us query brand data in natural language, reducing
                analysis time from days to minutes
              </li>
            </TimelineEntry>

            <TimelineEntry
              date="Apr 2024 — Jan 2025"
              title="Product & Growth Consultant"
              company="Self-employed"
              description="Took on fractional product marketing and growth roles for SaaS companies, focusing on conversion, retention, and positioning."
            >
              <TimelineSubEntry name="Uxcel" date="Apr — Oct 2024">
                <li>
                  Improved pro conversion through a redesigned onboarding experience across email
                  and in-app messaging
                </li>
                <li>Led analytics migration from Amplitude to PostHog</li>
                <li>
                  Repositioned product and led website copy redesign based on 500+ survey responses
                </li>
              </TimelineSubEntry>
              <TimelineSubEntry name="Kitbash 3D" date="Oct 2024 — Jan 2025">
                <li>
                  Used Mixpanel analytics and customer cancellation surveys to design a churn
                  prevention and win-back strategy
                </li>
                <li>Reduced monthly churn by 15% and increased reactivation rates by 20%</li>
              </TimelineSubEntry>
            </TimelineEntry>

            <TimelineEntry
              date="Jun 2022 — Jan 2024"
              title="Growth & Product Marketer"
              company="Whimsical"
            >
              <li>Launched AI product to #3 on Product Hunt, doubling website traffic</li>
              <li>
                Led user research interviews to inform product development direction and positioning
              </li>
              <li>
                Redesigned and A/B tested workspace invite flows to drive product-led paid member
                conversion
              </li>
            </TimelineEntry>

            <TimelineEntry date="Jan 2020 — Jun 2022" title="Head of Marketing" company="Catchbox">
              <li>
                Pitched and led the company's pivot towards hybrid learning in higher education — a
                repositioning that fundamentally shifted the growth strategy and drove 120% revenue
                growth in 18 months
              </li>
              <li>
                Built an organic growth engine around the new positioning — a content loop of SEO,
                case studies, and thought leadership that established Catchbox in the education
                vertical without paid advertising
              </li>
              <li>
                Ran the full marketing function across content, website, campaigns, and partner
                channels — by ISE 2022, competitors had adopted similar positioning
              </li>
            </TimelineEntry>
          </Timeline>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xs font-normal text-muted uppercase tracking-widest mb-md">Skills</h2>
          <SkillGrid>
            <SkillCard
              category="Growth & Experimentation"
              description="A/B testing, conversion, retention, product-led growth"
              tools="PostHog · Amplitude · Mixpanel"
            />
            <SkillCard
              category="Data & Analytics"
              description="SQL, dashboards, data modelling, platform migrations"
              tools="Metabase · Hex · Segment"
            />
            <SkillCard
              category="Lifecycle & CRM"
              description="Email architecture, onboarding, activation, notifications"
              tools="Customer.io · Klaviyo"
            />
            <SkillCard
              category="Product Thinking"
              description="User research, messaging, positioning, prototyping"
              tools="Figma"
            />
            <SkillCard
              category="Building & Automation"
              description="Shipping products and internal tools with code and AI"
              tools="Supabase · Claude Code · Google Apps Script · HTML/CSS · n8n"
            />
          </SkillGrid>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs font-normal text-muted uppercase tracking-widest mb-md">
            Education
          </h2>
          <div className="space-y-sm">
            <div>
              <p className="text-xs text-faint tracking-wide">2013 — 2017</p>
              <p className="text-copy text-sm">
                MA Economics and Politics ·{' '}
                <span className="text-muted">University of Edinburgh</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-faint tracking-wide">2022 — 2023</p>
              <p className="text-copy text-sm">
                Growth Series & Product Marketing Series ·{' '}
                <span className="text-muted">Reforge</span>
              </p>
            </div>
          </div>
        </section>

        {/* Projects bridge */}
        <div className="pt-md border-t border-border">
          <Link
            to="/projects"
            className="text-copy hover:text-muted transition-colors duration-300"
          >
            Selected work and case studies →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
