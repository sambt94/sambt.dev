// ABOUTME: Tests for the Accordion component.
// ABOUTME: Verifies rendering, expand/collapse, and multiple item support.

import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem } from '../accordion';

describe('Accordion', () => {
  it('renders items with titles', () => {
    render(
      <Accordion>
        <AccordionItem title="First">Content one</AccordionItem>
        <AccordionItem title="Second">Content two</AccordionItem>
      </Accordion>
    );
    expect(screen.getByText('First')).toBeDefined();
    expect(screen.getByText('Second')).toBeDefined();
  });

  it('content is hidden by default', () => {
    render(
      <Accordion>
        <AccordionItem title="Clickable">Hidden content</AccordionItem>
      </Accordion>
    );
    const overflowWrapper = screen.getByText('Hidden content').parentElement;
    expect(overflowWrapper?.classList.contains('max-h-0')).toBe(true);
  });

  it('expands item on click', () => {
    render(
      <Accordion>
        <AccordionItem title="Clickable">Hidden content</AccordionItem>
      </Accordion>
    );
    fireEvent.click(screen.getByText('Clickable'));
    expect(screen.getByText('Hidden content')).toBeDefined();
    const overflowWrapper = screen.getByText('Hidden content').parentElement;
    expect(overflowWrapper?.classList.contains('max-h-0')).toBe(false);
  });

  it('collapses item on second click', () => {
    render(
      <Accordion>
        <AccordionItem title="Clickable">Hidden content</AccordionItem>
      </Accordion>
    );
    fireEvent.click(screen.getByText('Clickable'));
    fireEvent.click(screen.getByText('Clickable'));
    const overflowWrapper = screen.getByText('Hidden content').parentElement;
    expect(overflowWrapper?.classList.contains('max-h-0')).toBe(true);
  });

  it('allows multiple items to be open simultaneously', () => {
    render(
      <Accordion>
        <AccordionItem title="First">Content one</AccordionItem>
        <AccordionItem title="Second">Content two</AccordionItem>
      </Accordion>
    );
    fireEvent.click(screen.getByText('First'));
    fireEvent.click(screen.getByText('Second'));
    const wrapper1 = screen.getByText('Content one').parentElement;
    const wrapper2 = screen.getByText('Content two').parentElement;
    expect(wrapper1?.classList.contains('max-h-0')).toBe(false);
    expect(wrapper2?.classList.contains('max-h-0')).toBe(false);
  });
});
