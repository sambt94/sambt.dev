// ABOUTME: Newsletter email template for sambt.dev — matches the website's
// ABOUTME: minimalist design system (Inter + Newsreader, light mode default, 560px max-width).

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

interface NewsletterProps {
  previewText?: string;
  heading: string;
  body: React.ReactNode;
  issueNumber?: number;
  issueDate?: string;
}

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

export const Newsletter = ({
  previewText = '',
  heading = 'Newsletter heading',
  body = 'Newsletter body content goes here.',
  issueNumber,
  issueDate,
}: NewsletterProps) => {
  const issueLabel = [issueNumber != null ? `#${issueNumber}` : null, issueDate]
    .filter(Boolean)
    .join(' — ');

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
            .email-body {
              background-color: #1a1a1a !important;
            }
            .email-container {
              background-color: ${colors.dark.bg} !important;
              border-color: ${colors.dark.border} !important;
            }
            .email-heading {
              color: ${colors.dark.text} !important;
            }
            .email-text {
              color: ${colors.dark.text} !important;
            }
            .email-muted {
              color: ${colors.dark.muted} !important;
            }
            .email-faint {
              color: ${colors.dark.faint} !important;
            }
            .email-hr {
              border-color: ${colors.dark.border} !important;
            }
            .email-link {
              color: ${colors.dark.text} !important;
            }
            .email-footer-link {
              color: ${colors.dark.faint} !important;
            }
          }
        `}</style>
      </Head>
      <Preview>{previewText}</Preview>
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
            {issueLabel && (
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
                {issueLabel}
              </Text>
            )}
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
              {heading}
            </Heading>
          </Section>

          {/* Body */}
          <Section
            className="email-text"
            style={{
              fontFamily: 'Inter, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '1.6',
              color: colors.light.text,
            }}
          >
            {body}
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
                style={{
                  color: colors.light.faint,
                  textDecoration: 'underline',
                }}
              >
                sambt.dev
              </Link>
              .{' '}
              <Link
                className="email-footer-link"
                href="{{{RESEND_UNSUBSCRIBE_URL}}}"
                style={{
                  color: colors.light.faint,
                  textDecoration: 'underline',
                }}
              >
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Newsletter;
