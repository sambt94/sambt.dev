// ABOUTME: Tests for the ArticlePreview card component.
// ABOUTME: Verifies rendering of title, summary, type badge, date, and link.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ArticlePreview } from '../article-preview';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('ArticlePreview', () => {
  const props = {
    slug: 'test-article',
    title: 'Test Article Title',
    type: 'case-study' as const,
    date: '2026-02-25',
    summary: 'A short summary of the article.',
  };

  it('renders the article title', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    expect(screen.getByText('Test Article Title')).toBeDefined();
  });

  it('renders the summary text', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    expect(screen.getByText('A short summary of the article.')).toBeDefined();
  });

  it('renders the type as a badge', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    expect(screen.getByText('Case Study')).toBeDefined();
  });

  it('renders essay type correctly', () => {
    renderWithRouter(<ArticlePreview {...props} type="essay" />);
    expect(screen.getByText('Essay')).toBeDefined();
  });

  it('formats the date for display', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    expect(screen.getByText('Feb 25, 2026')).toBeDefined();
  });

  it('links to the correct article path', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    const link = screen.getByText('Test Article Title').closest('a');
    expect(link?.getAttribute('href')).toBe('/writing/test-article');
  });

  it('does not have hover opacity effect', () => {
    renderWithRouter(<ArticlePreview {...props} />);
    const link = screen.getByText('Test Article Title').closest('a');
    expect(link?.classList.contains('hover:opacity-70')).toBe(false);
  });
});
