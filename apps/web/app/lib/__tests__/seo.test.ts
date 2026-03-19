// ABOUTME: Tests for the SEO meta helper utility.
// ABOUTME: Verifies Open Graph, Twitter Card, and article meta generation.

import { describe, it, expect } from 'vitest';
import { buildMeta, SITE_URL, SITE_NAME } from '../seo';

function findMeta(
  meta: Array<Record<string, string>>,
  key: string,
  keyField: 'name' | 'property' = 'property'
): string | undefined {
  return meta.find(m => m[keyField] === key)?.content;
}

describe('buildMeta', () => {
  it('generates title with site name suffix', () => {
    const meta = buildMeta({ title: 'Work' });
    expect(meta.find(m => m.title)?.title).toBe('Work — Sam Beattie');
  });

  it('uses bare title when it matches site name', () => {
    const meta = buildMeta({ title: SITE_NAME });
    expect(meta.find(m => m.title)?.title).toBe('Sam Beattie');
  });

  it('includes description meta', () => {
    const meta = buildMeta({
      title: 'Test',
      description: 'A test description',
    });
    expect(findMeta(meta, 'description', 'name')).toBe('A test description');
  });

  it('falls back to default description', () => {
    const meta = buildMeta({ title: 'Test' });
    expect(findMeta(meta, 'description', 'name')).toBe(
      "I'm Sam. Product, growth, and building with AI."
    );
  });

  it('generates Open Graph tags', () => {
    const meta = buildMeta({
      title: 'Projects',
      description: 'My projects',
      path: '/projects',
    });
    expect(findMeta(meta, 'og:title')).toBe('Projects — Sam Beattie');
    expect(findMeta(meta, 'og:description')).toBe('My projects');
    expect(findMeta(meta, 'og:url')).toBe(`${SITE_URL}/projects`);
    expect(findMeta(meta, 'og:site_name')).toBe('Sam Beattie');
    expect(findMeta(meta, 'og:type')).toBe('website');
    expect(findMeta(meta, 'og:locale')).toBe('en_US');
  });

  it('generates Twitter Card tags', () => {
    const meta = buildMeta({
      title: 'Writing',
      description: 'My essays',
    });
    expect(findMeta(meta, 'twitter:card', 'name')).toBe('summary');
    expect(findMeta(meta, 'twitter:title', 'name')).toBe('Writing — Sam Beattie');
    expect(findMeta(meta, 'twitter:description', 'name')).toBe('My essays');
  });

  it('sets article type and published time', () => {
    const meta = buildMeta({
      title: 'An Article',
      type: 'article',
      publishedTime: '2026-01-15',
      path: '/writing/my-article',
    });
    expect(findMeta(meta, 'og:type')).toBe('article');
    expect(findMeta(meta, 'article:published_time')).toBe('2026-01-15');
    expect(findMeta(meta, 'article:author')).toBe('Sam Beattie');
  });

  it('does not include article meta for website type', () => {
    const meta = buildMeta({ title: 'Home' });
    expect(findMeta(meta, 'article:published_time')).toBeUndefined();
    expect(findMeta(meta, 'article:author')).toBeUndefined();
  });
});
