// ABOUTME: Tests for the ProjectCard component used on the Projects page.
// ABOUTME: Verifies rendering of project name, description, stack, coming soon label, and links.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectStack, ProjectCard } from '../project-card';

function renderCard(props: React.ComponentProps<typeof ProjectCard>) {
  return render(
    <MemoryRouter>
      <ProjectStack>
        <ProjectCard {...props} />
      </ProjectStack>
    </MemoryRouter>
  );
}

describe('ProjectCard', () => {
  it('renders project name as a heading', () => {
    renderCard({
      name: 'Weekly Meals',
      description: 'Automated meal planner',
      stack: 'Notion API · AI · Python',
    });
    const heading = screen.getByText('Weekly Meals');
    expect(heading.tagName).toBe('H3');
  });

  it('renders description text', () => {
    renderCard({
      name: 'Weekly Meals',
      description: 'Automated meal planner',
      stack: 'Notion API · AI · Python',
    });
    expect(screen.getByText('Automated meal planner')).toBeDefined();
  });

  it('renders tech stack', () => {
    renderCard({
      name: 'Weekly Meals',
      description: 'Automated meal planner',
      stack: 'Notion API · AI · Python',
    });
    expect(screen.getByText('Notion API · AI · Python')).toBeDefined();
  });

  it('renders stack in a smaller text element', () => {
    renderCard({
      name: 'Creative Renamer',
      description: 'Google Drive automation',
      stack: 'Google Apps Script · Drive API',
    });
    const stackEl = screen.getByText('Google Apps Script · Drive API');
    expect(stackEl.classList.contains('text-xs')).toBe(true);
  });

  it('renders "Coming soon" label when comingSoon is true', () => {
    renderCard({
      name: 'Future Project',
      description: 'Something new',
      stack: 'TBD',
      comingSoon: true,
    });
    expect(screen.getByText('Coming soon')).toBeDefined();
  });

  it('does not render "Coming soon" label by default', () => {
    renderCard({
      name: 'Regular Project',
      description: 'Already done',
      stack: 'Done Tech',
    });
    expect(screen.queryByText('Coming soon')).toBeNull();
  });

  it('renders as a link when href is provided', () => {
    renderCard({
      name: 'Linked Project',
      description: 'Has a write-up',
      stack: 'Some Tech',
      href: '/writing/linked-project',
    });
    const link = screen.getByText('Linked Project').closest('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('/writing/linked-project');
  });

  it('renders as a div when no href is provided', () => {
    renderCard({
      name: 'Static Project',
      description: 'No link',
      stack: 'Some Tech',
    });
    const heading = screen.getByText('Static Project');
    expect(heading.closest('a')).toBeNull();
  });

  it('renders multiple project cards in a stack', () => {
    render(
      <MemoryRouter>
        <ProjectStack>
          <ProjectCard name="Project A" description="Desc A" stack="Tech A" />
          <ProjectCard name="Project B" description="Desc B" stack="Tech B" />
          <ProjectCard name="Project C" description="Desc C" stack="Tech C" />
        </ProjectStack>
      </MemoryRouter>
    );
    expect(screen.getByText('Project A')).toBeDefined();
    expect(screen.getByText('Project B')).toBeDefined();
    expect(screen.getByText('Project C')).toBeDefined();
  });
});
