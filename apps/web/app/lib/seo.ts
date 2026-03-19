// ABOUTME: Shared SEO helpers for generating Open Graph and Twitter meta tags.
// ABOUTME: Provides a buildMeta function to standardize meta across all routes.

const SITE_URL = 'https://sambt.dev';
const SITE_NAME = 'Sam Beattie';
const DEFAULT_DESCRIPTION = "I'm Sam. Product, growth, and building with AI.";

interface MetaOptions {
  title: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

export function buildMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  type = 'website',
  publishedTime,
}: MetaOptions) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: 'description', content: description },

    // Open Graph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:type', content: type },
    { property: 'og:locale', content: 'en_US' },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
  ];

  if (publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime });
    meta.push({ property: 'article:author', content: SITE_NAME });
  }

  return meta;
}

export { SITE_URL, SITE_NAME };
