// ABOUTME: E2E-style route tests verifying full page rendering.
// ABOUTME: Tests navigation structure, page content, and component integration.

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '~/components/theme-provider';

// Mock articles module since import.meta.glob doesn't work in test env
vi.mock('~/lib/articles', () => ({
  getAllArticles: () => [
    {
      slug: 'losing-your-moat',
      title: 'Losing Your Moat',
      type: 'essay',
      date: '2025-04-10',
      summary: 'A test summary',
      tags: ['ai'],
      status: 'published',
    },
    {
      slug: 'file-renamer',
      title: 'My first production code',
      type: 'case-study',
      date: '2025-04-30',
      summary: 'Another summary',
      tags: ['code'],
      status: 'published',
    },
  ],
  getArticleBySlug: () => null,
  getArticleFrontmatterBySlug: () => null,
}));

// Import route components after mocks
import About from '~/routes/_index';
import WritingIndex from '~/routes/writing._index';
import ProjectsPage from '~/routes/projects';

function renderRoute(ui: React.ReactElement) {
  return render(
    <MemoryRouter>
      <ThemeProvider>{ui}</ThemeProvider>
    </MemoryRouter>
  );
}

describe('Route: About (index)', () => {
  it('renders the hero title with WordReveal', () => {
    const { container } = renderRoute(<About />);
    // WordReveal splits text into individual <span> elements per word
    const heading = container.querySelector('h1');
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toContain('Sam');
    expect(heading?.textContent).toContain('nice');
  });

  it('renders the bio text', () => {
    renderRoute(<About />);
    expect(screen.getByText(/started out in marketing/)).toBeDefined();
  });

  it('renders the What I Do section with accordion', () => {
    renderRoute(<About />);
    expect(screen.getByText('What I Do')).toBeDefined();
    expect(screen.getByText('Product & Growth')).toBeDefined();
    expect(screen.getByText('Research & Positioning')).toBeDefined();
    expect(screen.getByText('Building with AI')).toBeDefined();
  });

  it('renders the Pablo easter egg link', () => {
    renderRoute(<About />);
    const pabloLink = screen.getByText('Pablo');
    expect(pabloLink.tagName).toBe('A');
  });

  it('renders the contact CTA', () => {
    renderRoute(<About />);
    const link = screen.getByText('Get in touch →');
    expect(link.getAttribute('href')).toBe('mailto:sambt94@icloud.com');
  });

  it('uses stagger-children for animation', () => {
    const { container } = renderRoute(<About />);
    const staggerDiv = container.querySelector('.stagger-children');
    expect(staggerDiv).not.toBeNull();
  });
});

describe('Route: Writing Index', () => {
  it('renders the Writing page title', () => {
    renderRoute(<WritingIndex />);
    expect(screen.getByText('Writing')).toBeDefined();
  });

  it('renders the subtitle', () => {
    renderRoute(<WritingIndex />);
    expect(
      screen.getByText(/Writing about what happens when your job starts changing/)
    ).toBeDefined();
  });

  it('renders article previews', () => {
    renderRoute(<WritingIndex />);
    expect(screen.getByText('Losing Your Moat')).toBeDefined();
  });

  it('does not use stagger-children animation', () => {
    const { container } = renderRoute(<WritingIndex />);
    const pageContainer = container.querySelector('.stagger-children');
    // Writing page should not have stagger animations
    expect(pageContainer).toBeNull();
  });
});

describe('Route: Projects', () => {
  it('renders the page title', () => {
    renderRoute(<ProjectsPage />);
    expect(screen.getByText("Things I've built.")).toBeDefined();
  });

  it('renders all project cards', () => {
    renderRoute(<ProjectsPage />);
    expect(screen.getByText('Hand-Drawn to Diagram')).toBeDefined();
    expect(screen.getByText('Making Data Accessible')).toBeDefined();
    expect(screen.getByText('Modular Email Design System')).toBeDefined();
    expect(screen.getByText('Weekly Meal Planner')).toBeDefined();
    expect(screen.getByText('Google Drive File Renamer')).toBeDefined();
  });

  it('project cards have border styling', () => {
    renderRoute(<ProjectsPage />);
    const heading = screen.getByText('Making Data Accessible');
    const card = heading.closest('.border');
    expect(card).not.toBeNull();
    expect(card?.classList.contains('border-border')).toBe(true);
    expect(card?.classList.contains('rounded-lg')).toBe(true);
  });

  it('shows coming soon labels', () => {
    renderRoute(<ProjectsPage />);
    const labels = screen.getAllByText('Coming soon');
    expect(labels.length).toBeGreaterThan(0);
  });
});
