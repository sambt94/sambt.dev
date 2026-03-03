// ABOUTME: Projects page — showcases personal projects with descriptions and tech stacks.
// ABOUTME: Single-column card stack with "coming soon" labels for upcoming write-ups.

import type { MetaFunction } from '@remix-run/node';
import { PageContainer } from '~/components/layout';
import { PageHeader } from '~/components/page-header';
import { ProjectStack, ProjectCard } from '~/components/project-card';
import { buildMeta } from '~/lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Projects',
    description: "Things I've built — from AI-powered tools to design systems and automations.",
    path: '/projects',
  });

export default function ProjectsPage() {
  return (
    <PageContainer>
      <div>
        <PageHeader
          title="Things I've built."
          subtitle="A mix of professional tools, personal projects, and experiments in building with AI. Detailed write-ups for each are in the works."
        />

        <ProjectStack>
          <ProjectCard
            name="Hand-Drawn to Diagram"
            description="A reMarkable tablet tool that turns rough pen sketches into polished diagrams. Extracts strokes from the tablet, interprets the drawing with AI, and generates clean SVG output."
            stack="reMarkable API · AI · SVG · Python"
            comingSoon
          />
          <ProjectCard
            name="Making Data Accessible"
            description="Connected AI to read-only databases through Model Context Protocol. Ask questions in plain English and get real answers back. Generate visualisations from live data. Build SQL queries for persistent dashboards."
            stack="Model Context Protocol · SQL · AI"
            comingSoon
          />
          <ProjectCard
            name="Modular Email Design System"
            description="Built a code-first email design system with AI. 20+ responsive HTML components that work across every major email client. Solved the problem of email builders being terrible without writing raw HTML from scratch."
            stack="AI · HTML Email · CSS"
            comingSoon
          />
          <ProjectCard
            name="Weekly Meal Planner"
            description="A meal planning system connecting Notion, recipe scraping, and AI. Generates weekly plans, builds shopping lists, and gets used every single week."
            stack="Notion API · AI · MCP · Python"
            comingSoon
          />
          <ProjectCard
            name="Google Drive File Renamer"
            description="A Google Apps Script that monitors nested Drive folders and auto-renames files based on folder structure. Built to solve a real production workflow problem. Runs daily, zero maintenance."
            stack="Google Apps Script · Drive API"
            href="/writing/file-renamer"
          />
        </ProjectStack>
      </div>
    </PageContainer>
  );
}
