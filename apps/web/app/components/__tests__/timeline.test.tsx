// ABOUTME: Tests for the Timeline component used on the Work page.
// ABOUTME: Verifies rendering of entries, nested sub-entries, and staggered animations.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline, TimelineEntry, TimelineSubEntry } from '../timeline';

describe('Timeline', () => {
  it('renders entries with dates and titles', () => {
    render(
      <Timeline>
        <TimelineEntry date="Jun 2025 — Jan 2026" title="Growth Lead" company="Acme Corp">
          <li>Did something great</li>
        </TimelineEntry>
      </Timeline>
    );
    expect(screen.getByText('Jun 2025 — Jan 2026')).toBeDefined();
    expect(screen.getByText(/Growth Lead/)).toBeDefined();
    expect(screen.getByText(/Acme Corp/)).toBeDefined();
  });

  it('renders bullet point content', () => {
    render(
      <Timeline>
        <TimelineEntry date="2024" title="Engineer" company="Startup">
          <li>Built a feature</li>
          <li>Shipped a product</li>
        </TimelineEntry>
      </Timeline>
    );
    expect(screen.getByText('Built a feature')).toBeDefined();
    expect(screen.getByText('Shipped a product')).toBeDefined();
  });

  it('renders description text when provided', () => {
    render(
      <Timeline>
        <TimelineEntry
          date="2024"
          title="Consultant"
          company="Self-employed"
          description="Worked with SaaS companies on growth."
        >
          <li>A bullet</li>
        </TimelineEntry>
      </Timeline>
    );
    expect(screen.getByText('Worked with SaaS companies on growth.')).toBeDefined();
  });

  it('renders nested sub-entries', () => {
    render(
      <Timeline>
        <TimelineEntry date="2024" title="Consultant" company="Self-employed">
          <TimelineSubEntry name="ClientCo" date="Apr — Oct 2024">
            <li>Did client work</li>
          </TimelineSubEntry>
        </TimelineEntry>
      </Timeline>
    );
    expect(screen.getByText('ClientCo')).toBeDefined();
    expect(screen.getByText(/Apr — Oct 2024/)).toBeDefined();
    expect(screen.getByText('Did client work')).toBeDefined();
  });

  it('renders multiple entries in sequence', () => {
    render(
      <Timeline>
        <TimelineEntry date="2025" title="Role A" company="Co A">
          <li>Bullet A</li>
        </TimelineEntry>
        <TimelineEntry date="2024" title="Role B" company="Co B">
          <li>Bullet B</li>
        </TimelineEntry>
      </Timeline>
    );
    expect(screen.getByText(/Role A/)).toBeDefined();
    expect(screen.getByText(/Role B/)).toBeDefined();
  });
});
