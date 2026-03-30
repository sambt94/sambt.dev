// ABOUTME: Root layout for sambt.dev Remix app.
// ABOUTME: Loads Inter + Newsreader fonts, wraps app in ThemeProvider, renders shell.

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import { Analytics } from '@vercel/analytics/remix';
import { SpeedInsights } from '@vercel/speed-insights/remix';
import { PHProvider } from './provider';
import './tailwind.css';
import { ThemeProvider } from '~/components/theme-provider';
import { ThemeToggle } from '~/components/theme-toggle';
import { Nav } from '~/components/nav';
import { SiteHeader } from '~/components/site-header';

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PHProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <ScrollRestoration />
          <Analytics />
          <SpeedInsights />
          <Scripts />
        </PHProvider>
      </body>
    </html>
  );
}

export default function App() {
  const matches = useMatches();
  const hideChrome = matches.some(m => (m.handle as Record<string, unknown>)?.hideChrome);

  return (
    <>
      {!hideChrome && <Nav />}
      {!hideChrome && <SiteHeader />}
      <Outlet />
      {!hideChrome && (
        <div className="max-w-content mx-auto px-md pb-lg sm:p-0">
          <ThemeToggle />
        </div>
      )}
    </>
  );
}
