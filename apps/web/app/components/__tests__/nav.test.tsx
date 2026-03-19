// ABOUTME: Tests for the frosted glass navigation component.
// ABOUTME: Verifies link rendering, active state, and correct route targets.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Nav } from '../nav';

function renderWithRouter(initialPath: string = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Nav />
    </MemoryRouter>
  );
}

describe('Nav', () => {
  it('renders all navigation links', () => {
    renderWithRouter('/');
    expect(screen.getByText('About')).toBeDefined();
    expect(screen.getByText('Work')).toBeDefined();
    expect(screen.getByText('Writing')).toBeDefined();
    expect(screen.getByText('Projects')).toBeDefined();
  });

  it('renders links with correct href targets', () => {
    renderWithRouter('/');
    expect(screen.getByText('About').closest('a')?.getAttribute('href')).toBe('/');
    expect(screen.getByText('Work').closest('a')?.getAttribute('href')).toBe('/work');
    expect(screen.getByText('Writing').closest('a')?.getAttribute('href')).toBe('/writing');
    expect(screen.getByText('Projects').closest('a')?.getAttribute('href')).toBe('/projects');
  });

  it('marks About link as active on root path', () => {
    renderWithRouter('/');
    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink?.classList.contains('active')).toBe(true);
  });

  it('marks Work link as active on /work path', () => {
    renderWithRouter('/work');
    const workLink = screen.getByText('Work').closest('a');
    expect(workLink?.classList.contains('active')).toBe(true);
  });

  it('renders as a nav element', () => {
    renderWithRouter('/');
    expect(document.querySelector('nav')).not.toBeNull();
  });
});
