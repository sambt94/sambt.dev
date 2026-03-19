// ABOUTME: About page (landing page) — introduction, what I do, and call-to-action.
// ABOUTME: Composed from PageHeader, Accordion, PabloReveal, and WordReveal components.

import type { MetaFunction } from '@remix-run/node';
import { PageContainer } from '~/components/layout';
import { PageHeader } from '~/components/page-header';
import { Accordion, AccordionItem } from '~/components/accordion';
import { PabloReveal } from '~/components/pablo-reveal';
import { WordReveal } from '~/components/word-reveal';
import { buildMeta } from '~/lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Sam Beattie',
    description: "I'm Sam. Product, growth, and building with AI.",
  });

export default function About() {
  return (
    <PageContainer>
      <div className="space-y-lg stagger-children">
        <PageHeader title={<WordReveal text="I'm Sam, nice to meet you. 👋" />} />

        <div className="space-y-md">
          <p className="text-[0.9375rem] text-muted leading-[1.75]">
            I started out in marketing, from intern all the way to running the department. But every
            project moved me closer to product — and more recently, to building things myself.
          </p>
          <p className="text-[0.9375rem] text-muted leading-[1.75]">
            These days that looks like anything from user research and positioning to building AI
            integrations and shipping working tools. The line between marketing person and product
            person got blurry a while ago. I've stopped trying to draw it.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-normal text-muted uppercase tracking-widest mb-md">
            What I Do
          </h2>
          <Accordion>
            <AccordionItem title="Product & Growth">
              Experimentation, conversion, retention — the kind of growth that comes from
              understanding the product, not just running campaigns.
            </AccordionItem>
            <AccordionItem title="Research & Positioning">
              User interviews, market analysis, and turning what you learn into messaging and
              strategy that actually resonates.
            </AccordionItem>
            <AccordionItem title="Building with AI">
              Shipping working tools, automating workflows, and connecting AI to real data.
            </AccordionItem>
          </Accordion>
        </div>

        <div className="pt-md border-t border-border">
          <p className="text-[0.9375rem] text-muted leading-[1.75]">
            Originally from Wigan, living in Latvia — trying hard and failing often to speak the
            local language. Here with my wife and our golden retriever <PabloReveal />
          </p>
        </div>

        <div className="pt-md space-y-md">
          <p className="text-[0.9375rem] text-muted leading-[1.75]">
            I work with early-stage and growth-stage tech companies on product, growth, and the
            space in between.
          </p>
          <a
            href="mailto:sambt94@icloud.com"
            className="inline-block text-[1.125rem] text-copy underline decoration-faint underline-offset-4 hover:decoration-copy transition-all duration-200"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
