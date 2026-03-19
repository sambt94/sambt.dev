// ABOUTME: Tests for the PageHeader component.
// ABOUTME: Verifies title rendering, optional subtitle, and semantic markup.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageHeader } from '../page-header';

describe('PageHeader', () => {
  it('renders title', () => {
    render(<PageHeader title="Hello World" />);
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('renders title as h1', () => {
    render(<PageHeader title="Test Title" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('Test Title');
  });

  it('renders subtitle when provided', () => {
    render(<PageHeader title="Hello" subtitle="World" />);
    expect(screen.getByText('World')).toBeDefined();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<PageHeader title="Hello" />);
    expect(container.querySelector('p')).toBeNull();
  });

  it('wraps content in a header element', () => {
    const { container } = render(<PageHeader title="Test" />);
    expect(container.querySelector('header')).not.toBeNull();
  });
});
