// ABOUTME: Tests for the WordReveal animation component.
// ABOUTME: Verifies word splitting, staggered animation delays, and text output.

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WordReveal } from '../word-reveal';

describe('WordReveal', () => {
  it('renders all words from the text', () => {
    const { container } = render(<WordReveal text="Hello world test" />);
    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toContain('Hello');
    expect(spans[1].textContent).toContain('world');
    expect(spans[2].textContent).toContain('test');
  });

  it('wraps each word in a span with animate-word-reveal class', () => {
    const { container } = render(<WordReveal text="One Two" />);
    const spans = container.querySelectorAll('span.animate-word-reveal');
    expect(spans.length).toBe(2);
  });

  it('applies staggered animation delays', () => {
    const { container } = render(<WordReveal text="A B C" baseDelay={0.3} increment={0.1} />);
    const spans = container.querySelectorAll('span');
    expect(spans[0].style.animationDelay).toBe('0.3s');
    expect(spans[1].style.animationDelay).toBe('0.4s');
    expect(spans[2].style.animationDelay).toBe('0.5s');
  });

  it('uses default baseDelay and increment', () => {
    const { container } = render(<WordReveal text="Hello World" />);
    const spans = container.querySelectorAll('span');
    expect(spans[0].style.animationDelay).toBe('0.3s');
    // Second word: 0.3 + 0.08 = 0.38
    expect(spans[1].style.animationDelay).toBe('0.38s');
  });

  it('does not add non-breaking space after the last word', () => {
    const { container } = render(<WordReveal text="Just one" />);
    const spans = container.querySelectorAll('span');
    const lastSpan = spans[spans.length - 1];
    expect(lastSpan.textContent).toBe('one');
  });

  it('adds non-breaking space after non-last words', () => {
    const { container } = render(<WordReveal text="A B" />);
    const spans = container.querySelectorAll('span');
    // First word should have NBSP appended
    expect(spans[0].textContent).toBe('A\u00A0');
  });
});
