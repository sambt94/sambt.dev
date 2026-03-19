// ABOUTME: Integration tests for MdxLayout with EmailSubscribe.
// ABOUTME: Verifies article layout renders header, content, subscribe form, and back links.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MdxLayout } from '../mdx-layout';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('MdxLayout', () => {
  const defaultProps = {
    title: 'Test Article',
    date: '2025-06-15',
    type: 'essay' as const,
  };

  it('renders article title as h1', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>Article body</p>
      </MdxLayout>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('Test Article');
  });

  it('renders formatted date', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>Body</p>
      </MdxLayout>
    );
    expect(screen.getByText('Jun 15, 2025')).toBeDefined();
  });

  it('renders type label', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps} type="case-study">
        <p>Body</p>
      </MdxLayout>
    );
    expect(screen.getByText('Case Study')).toBeDefined();
  });

  it('renders article body content', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>This is the article content</p>
      </MdxLayout>
    );
    expect(screen.getByText('This is the article content')).toBeDefined();
  });

  it('renders email subscribe form', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>Body</p>
      </MdxLayout>
    );
    expect(screen.getByPlaceholderText('your@email.com')).toBeDefined();
    expect(screen.getByText('Subscribe')).toBeDefined();
  });

  it('renders back to writing links', () => {
    renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>Body</p>
      </MdxLayout>
    );
    const links = screen.getAllByText('← Back to Writing');
    expect(links.length).toBe(2);
  });

  it('has stagger-children class on article element', () => {
    const { container } = renderWithRouter(
      <MdxLayout {...defaultProps}>
        <p>Body</p>
      </MdxLayout>
    );
    const article = container.querySelector('article');
    expect(article?.classList.contains('stagger-children')).toBe(true);
  });
});
