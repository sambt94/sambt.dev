// ABOUTME: Dynamic sitemap.xml resource route for search engine indexing.
// ABOUTME: Generates XML sitemap from static pages and published articles.

import { getAllArticles } from '~/lib/articles';
import { SITE_URL } from '~/lib/seo';

export function loader() {
  const staticPages = [
    { path: '', priority: '1.0' },
    { path: '/work', priority: '0.8' },
    { path: '/projects', priority: '0.8' },
    { path: '/writing', priority: '0.8' },
  ];

  const articles = getAllArticles();

  const urls = [
    ...staticPages.map(
      ({ path, priority }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <priority>${priority}</priority>
  </url>`
    ),
    ...articles.map(
      article => `
  <url>
    <loc>${SITE_URL}/writing/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <priority>0.7</priority>
  </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
