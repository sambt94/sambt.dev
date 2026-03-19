// ABOUTME: Tests for ThemeProvider context and useTheme hook.
// ABOUTME: Verifies default theme, toggle behavior, and localStorage persistence.

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../theme-provider';

function TestConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light');
  });

  it('defaults to dark theme', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('toggles from dark to light', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('toggle').click();
    });
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it("adds 'light' class to documentElement when light theme", () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('toggle').click();
    });
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it("removes 'light' class when toggled back to dark", () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('toggle').click();
    });
    act(() => {
      screen.getByText('toggle').click();
    });
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('persists theme to localStorage', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => {
      screen.getByText('toggle').click();
    });
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('reads stored theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'light');
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('throws when useTheme is used outside ThemeProvider', () => {
    expect(() => render(<TestConsumer />)).toThrow('useTheme must be used within ThemeProvider');
  });
});
