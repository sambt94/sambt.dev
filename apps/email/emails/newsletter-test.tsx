// ABOUTME: Test instance of the newsletter template with the first article content.
// ABOUTME: Used to verify the email pipeline and design before real broadcasts.

import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const colors = {
  light: {
    bg: '#f5efe4',
    text: '#1a1a1a',
    muted: '#444444',
    faint: '#999999',
    border: '#e0d8cb',
  },
  dark: {
    bg: '#0e0e0e',
    text: '#e8e8e8',
    muted: '#bbbbbb',
    faint: '#666666',
    border: '#222222',
  },
};

const p: React.CSSProperties = {
  fontFamily: 'Inter, Helvetica, sans-serif',
  fontSize: '16px',
  fontWeight: 300,
  lineHeight: '1.6',
  color: colors.light.text,
  margin: '0 0 16px 0',
};

const subheading: React.CSSProperties = {
  fontFamily: 'Newsreader, Georgia, serif',
  fontSize: '20px',
  fontWeight: 400,
  fontStyle: 'italic' as const,
  lineHeight: '1.4',
  color: colors.light.text,
  margin: '32px 0 16px 0',
};

const divider: React.CSSProperties = {
  borderTop: `1px solid ${colors.light.border}`,
  margin: '32px 0',
};

export const NewsletterTest = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2',
            format: 'woff2',
          }}
          fontWeight={300}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Newsreader"
          fallbackFontFamily="Georgia"
          webFont={{
            url: 'https://fonts.gstatic.com/s/newsreader/v21/cY9qfjOCX1hbuyalUrK439vogpk9.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Newsreader"
          fallbackFontFamily="Georgia"
          webFont={{
            url: 'https://fonts.gstatic.com/s/newsreader/v21/cY9kfjOCX1hbuyalUrK435bsqtihfA.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="italic"
        />
        <style>{`
          @media (prefers-color-scheme: dark) {
            .email-body { background-color: #1a1a1a !important; }
            .email-container { background-color: ${colors.dark.bg} !important; border-color: ${colors.dark.border} !important; }
            .email-heading { color: ${colors.dark.text} !important; }
            .email-text, .email-text p { color: ${colors.dark.text} !important; }
            .email-muted { color: ${colors.dark.muted} !important; }
            .email-faint { color: ${colors.dark.faint} !important; }
            .email-hr { border-color: ${colors.dark.border} !important; }
            .email-subheading { color: ${colors.dark.text} !important; }
            .email-footer-link { color: ${colors.dark.faint} !important; }
          }
        `}</style>
      </Head>
      <Preview>
        My first proper job was at a whisky startup. Seven years later, the world looks very
        different.
      </Preview>
      <Body
        className="email-body"
        style={{
          backgroundColor: '#e8e3d8',
          fontFamily: 'Inter, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif',
          margin: 0,
          padding: '40px 0',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <Container
          className="email-container"
          style={{
            backgroundColor: colors.light.bg,
            maxWidth: '600px',
            margin: '0 auto',
            padding: '48px 40px',
            border: `1px solid ${colors.light.border}`,
            borderRadius: '2px',
          }}
        >
          {/* Header */}
          <Section style={{ marginBottom: '48px' }}>
            <Text
              className="email-muted"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
                color: colors.light.muted,
                margin: 0,
              }}
            >
              Sam Middleton Beattie
            </Text>
            <Text
              className="email-faint"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                color: colors.light.faint,
                margin: '4px 0 0 0',
              }}
            >
              #1 — March 2026
            </Text>
          </Section>

          {/* Title */}
          <Section style={{ marginBottom: '32px' }}>
            <Heading
              className="email-heading"
              as="h1"
              style={{
                fontFamily: 'Newsreader, Georgia, serif',
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: '1.3',
                color: colors.light.text,
                margin: 0,
              }}
            >
              Losing your moat, learning to build and starting with the hardest part
            </Heading>
          </Section>

          {/* Body */}
          <Section className="email-text">
            <Text style={p}>
              My first 'proper' job was a fixed term graduate role at a whisky startup. My role was
              "innovations and communications assistant." It sounded very fancy. What it looked like
              in practice was working with a developer on his side hustle, out of the co-working
              space attached to his day job office.
            </Text>

            <Text style={p}>
              I absolutely loved it though. All things considered, I had a better idea of what I
              didn't want to do after finishing university than what I actually did want to do. This
              role was where I got to figure things out.
            </Text>

            <Text style={p}>
              Though I did end up writing on the blog, what surprised me was how much of everything
              else I did, and what I ended up enjoying the most about the job. I got super into
              Google Analytics, calculating subscriber lifetime value projections, and — honestly —
              I didn't mind packing the orders when required. It felt real.
            </Text>

            <Text className="email-subheading" style={subheading}>
              Early careers and building your moat
            </Text>

            <Text style={p}>
              A lot has changed in the past 7 years. I'm not even sure that intern role would exist.
              For one thing, at least half of the stuff I was doing day to day, learning as I went,
              could be done in a few minutes with AI.
            </Text>

            <Text style={p}>
              None of this was glamorous knowledge, but it compounded into a set of things I could
              do that made me somewhat useful. Over time, like everyone does as they shape a career,
              I built this into something of a moat, a mix of specific knowledge and skills that I
              could apply to different roles.
            </Text>

            <Text style={{ ...p, fontStyle: 'italic' }}>
              Today, this type of knowledge is less valuable.
            </Text>

            <Text style={p}>
              After years of learning by doing, from digital marketing through to product
              development, I've found myself asking this question more and more. If knowledge is no
              longer the main currency, what does the future of work look like for me?
            </Text>

            <Hr className="email-hr" style={divider} />

            <Text className="email-subheading" style={subheading}>
              The change — building Pulss
            </Text>

            <Text style={p}>
              It was only when I started working on Pulss that things started to change. We were
              building a startup and I had more data than I knew what to do with. Then I stumbled
              across a way to connect AI directly to our database. When it worked, I could suddenly
              ask questions of the data and get answers.
            </Text>

            <Text style={p}>
              I still remember this feeling like a big change, like a cheat code I'd stumbled upon
              by accident. It felt like I'd unlocked skills I didn't have before. In reality, I was
              about to discover an entirely new way to work.
            </Text>

            <Hr className="email-hr" style={divider} />

            <Text className="email-subheading" style={subheading}>
              Learning to think differently
            </Text>

            <Text style={p}>
              In recent months I've stopped myself from thinking about what I don't know, what I've
              yet to learn, or even what AI can do better than me. I've leaned into it. Every
              challenge is something to work through, every knowledge gap something to explore
              through practice.
            </Text>

            <Text style={p}>
              I've built tools and workflows for my personal and professional life that I would have
              never thought possible before. I've moved fast, broken many, many things, but I'm
              genuinely proud of the work.
            </Text>

            <Text style={p}>
              I'm writing this because most people I talk to are stuck where I was. They're exposed
              to the daily noise of new models and next big things, but they've never gone beyond
              asking ChatGPT a couple of questions. For most people, AI is a buzzword. It's
              confusing, if not outright scary.
            </Text>

            <Hr className="email-hr" style={divider} />

            <Text className="email-subheading" style={subheading}>
              Starting with the hard part
            </Text>

            <Text style={p}>
              It's funny — despite starting as a marketer and building stories for plenty of
              products and brands, this kind of self-promotion has always been hard for me. Part of
              the reason I'm starting this newsletter is to push myself past it.
            </Text>

            <Text style={p}>
              This is the first post. Next, I'll dive into the projects — starting with a meal
              planner I built for me and my wife. If you want to follow along, stay tuned.
            </Text>
          </Section>

          {/* Read on site CTA */}
          <Section style={{ margin: '24px 0' }}>
            <Link
              href="https://sambt.dev/#writing"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: colors.light.muted,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Read on sambt.dev →
            </Link>
          </Section>

          {/* Divider */}
          <Hr
            className="email-hr"
            style={{
              borderTop: `1px solid ${colors.light.border}`,
              margin: '48px 0 24px 0',
            }}
          />

          {/* Footer */}
          <Section>
            <Text
              className="email-faint"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: '1.6',
                color: colors.light.faint,
                margin: 0,
              }}
            >
              You're getting this because you signed up at{' '}
              <Link
                className="email-footer-link"
                href="https://sambt.dev"
                style={{ color: colors.light.faint, textDecoration: 'underline' }}
              >
                sambt.dev
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsletterTest;
