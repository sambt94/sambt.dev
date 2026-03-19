// ABOUTME: Tests for the persistent SiteHeader component.
// ABOUTME: Verifies name and role are rendered on all pages.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SiteHeader } from '../site-header';

describe('SiteHeader', () => {
  it('renders the name', () => {
    render(<SiteHeader />);
    expect(screen.getByText('Sam Middleton Beattie')).toBeDefined();
  });

  it('renders the role', () => {
    render(<SiteHeader />);
    expect(screen.getByText('Product & Growth')).toBeDefined();
  });

  it('applies max-w-content for consistent width', () => {
    const { container } = render(<SiteHeader />);
    const wrapper = container.firstElementChild;
    expect(wrapper?.classList.contains('max-w-content')).toBe(true);
  });

  it('has fade-in animation', () => {
    const { container } = render(<SiteHeader />);
    const wrapper = container.firstElementChild;
    expect(wrapper?.classList.contains('animate-fade-in')).toBe(true);
  });
});
