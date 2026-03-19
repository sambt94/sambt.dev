// ABOUTME: Welcome email template sent when someone subscribes at sambt.dev.
// ABOUTME: Matches the newsletter design system (Inter + Newsreader, light/dark mode).

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

export const Welcome = () => {
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
      <Preview>Thanks for subscribing — you'll hear from me when there's something new.</Preview>
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
              Thanks for subscribing
            </Heading>
          </Section>

          {/* Body */}
          <Section>
            <Text
              className="email-text"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.7',
                color: colors.light.text,
                margin: '0 0 20px 0',
              }}
            >
              Hey! Thanks for subscribing.
            </Text>
            <Text
              className="email-text"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.7',
                color: colors.light.text,
                margin: '0 0 20px 0',
              }}
            >
              All future emails from me will try to be at least somewhat useful, and maybe even
              funny. Never any spam.
            </Text>
            <Text
              className="email-text"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.7',
                color: colors.light.text,
                margin: '0 0 20px 0',
              }}
            >
              If you subscribed by mistake, simply drop a reply to this message and I'll take you
              off the list. It's a small list — feels a bit personal but nice.
            </Text>
            <Text
              className="email-text"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.7',
                color: colors.light.text,
                margin: '0 0 20px 0',
              }}
            >
              In the meantime, there's some writing at{' '}
              <Link
                className="email-link"
                href="https://sambt.dev/writing"
                style={{
                  color: colors.light.text,
                  textDecoration: 'underline',
                }}
              >
                sambt.dev/writing
              </Link>{' '}
              if you want a head start.
            </Text>
            <Text
              className="email-text"
              style={{
                fontFamily: 'Inter, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.7',
                color: colors.light.text,
                margin: '0',
              }}
            >
              Sam
            </Text>
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

export default Welcome;
