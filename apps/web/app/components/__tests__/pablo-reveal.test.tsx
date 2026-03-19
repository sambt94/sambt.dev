// ABOUTME: Tests for the PabloReveal easter egg component.
// ABOUTME: Verifies inline link trigger and image reveal toggle.

import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PabloReveal } from '../pablo-reveal';

describe('PabloReveal', () => {
  it('renders Pablo as a clickable link', () => {
    render(<PabloReveal />);
    const link = screen.getByText('Pablo');
    expect(link.tagName).toBe('A');
  });

  it('image container is hidden by default', () => {
    render(<PabloReveal />);
    const img = screen.getByAltText('Pablo the golden retriever');
    const container = img.parentElement;
    expect(container?.classList.contains('max-h-0')).toBe(true);
  });

  it('reveals image when Pablo link is clicked', () => {
    render(<PabloReveal />);
    fireEvent.click(screen.getByText('Pablo'));
    const img = screen.getByAltText('Pablo the golden retriever');
    const container = img.parentElement;
    expect(container?.classList.contains('max-h-[400px]')).toBe(true);
  });

  it('hides image on second click', () => {
    render(<PabloReveal />);
    fireEvent.click(screen.getByText('Pablo'));
    fireEvent.click(screen.getByText('Pablo'));
    const img = screen.getByAltText('Pablo the golden retriever');
    const container = img.parentElement;
    expect(container?.classList.contains('max-h-0')).toBe(true);
  });

  it('renders the correct image source', () => {
    render(<PabloReveal />);
    const img = screen.getByAltText('Pablo the golden retriever') as HTMLImageElement;
    expect(img.src).toContain('/images/pablo.jpg');
  });
});
