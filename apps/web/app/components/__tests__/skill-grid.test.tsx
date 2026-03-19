// ABOUTME: Tests for the SkillGrid component used on the Work page.
// ABOUTME: Verifies rendering of category names, descriptions, and tool lists.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillGrid, SkillCard } from '../skill-grid';

describe('SkillGrid', () => {
  it('renders skill cards with category names', () => {
    render(
      <SkillGrid>
        <SkillCard
          category="Growth & Experimentation"
          description="A/B testing, conversion"
          tools="PostHog · Amplitude"
        />
      </SkillGrid>
    );
    expect(screen.getByText('Growth & Experimentation')).toBeDefined();
  });

  it('renders descriptions and tool lists', () => {
    render(
      <SkillGrid>
        <SkillCard
          category="Data & Analytics"
          description="SQL, dashboards, data modelling"
          tools="Metabase · Hex · Segment"
        />
      </SkillGrid>
    );
    expect(screen.getByText('SQL, dashboards, data modelling')).toBeDefined();
    expect(screen.getByText('Metabase · Hex · Segment')).toBeDefined();
  });

  it('renders multiple skill cards', () => {
    render(
      <SkillGrid>
        <SkillCard category="Growth" description="Testing" tools="PostHog" />
        <SkillCard category="Data" description="Analytics" tools="Metabase" />
        <SkillCard category="Building" description="Shipping" tools="Supabase" />
      </SkillGrid>
    );
    expect(screen.getByText('Growth')).toBeDefined();
    expect(screen.getByText('Data')).toBeDefined();
    expect(screen.getByText('Building')).toBeDefined();
  });

  it('renders category as a heading element', () => {
    render(
      <SkillGrid>
        <SkillCard category="Lifecycle" description="Email" tools="Customer.io" />
      </SkillGrid>
    );
    const heading = screen.getByText('Lifecycle');
    expect(heading.tagName).toBe('H3');
  });
});
