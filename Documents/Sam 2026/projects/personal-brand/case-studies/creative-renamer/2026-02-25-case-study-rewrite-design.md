---
tags:
  - design
  - case-study
  - creative-renamer
type: design
status: approved
date: 2026-02-25
---

# Creative File Renamer — Case Study Rewrite Design

## What we're doing

Rewriting the Creative Renamer case study from a pure technical piece into a merged narrative + technical format. The story of building first production code with a non-technical background IS the case study. Technical details are woven in where they serve the story — the GitHub repo is the escape hatch for deep divers.

## Key decisions

- **Format:** Single merged piece (replaces the current technical-only version)
- **Audience:** Dual — hiring managers follow the journey, technical peers catch the specifics
- **Tone:** Direct, conversational, honest. Same voice as existing case study drafts.
- **Length:** ~800-1200 words
- **Placeholders:** First pass leaves `[PLACEHOLDER]` blocks where Sam's personal voice needs to fill in specific memories, moments, and reflections

## Structure

### Header block

Same format as other case studies:
- Title + one-liner blockquote
- Role / Timeline / Stack / Code link metadata

### Section 1: How I got involved (~100-150 words)

- Non-technical background — came from marketing/product
- Got recommended because of Notion work (really: figured out Claude + Notion MCP)
- Said yes because wanted to try building something real
- `[PLACEHOLDER]` for personal details: who recommended, what the team was like, what it felt like to say yes

### Section 2: The problem (~100 words)

- Condensed from existing technical case study
- 100+ nested folders, arbitrary filenames, convention on paper only
- Keep short — this is setup, not the main event

### Section 3: Building it with Claude (~300-400 words)

- Chat-based iterations, back and forth with Claude
- Version table (trimmed to key columns — version, approach, lesson)
- 2-3 challenges told as mini-stories:
  1. **Performance at scale** — recursive scanning hitting 6-min limit → folder caching → Activity API breakthrough
  2. **Scope creep → scope focus** — V2 tried to build everything → V3.1 stripped to core value
  3. **"Works on my Drive" → production** — personal test → shared drives, different ownership, unexpected folder depths
- `[PLACEHOLDER]` spots for specific memories of working through these problems

### Section 4: The result (~75 words)

- What it does today: runs every 15 minutes, zero maintenance
- Key stats: 100+ folders, 2-5 min execution time
- Team finds any asset in seconds
- Brief — the punchline is that it just works

### Section 5: Rebuilding it (~200-250 words)

- NEW content not in existing draft
- Came back months later with Claude Code + Opus (vs chat-based Claude)
- Rebuilt script for public GitHub — stripped private data, generic field names
- Ran security review + code review using skills/subagents
- Found real issues: formula injection, race conditions, performance bottleneck
- Created full demo setup (one-click folders + spreadsheet)
- The contrast: first time was exploratory chat. This time was structured engineering workflow.
- `[PLACEHOLDER]` for what this felt like — the difference between first time and now

### Section 6: What I learned (~100-150 words)

- The through-line: non-technical → first production code → rebuilding it better
- What building with AI actually looks like (not magic, lots of iteration)
- `[PLACEHOLDER]` for personal reflection on what this means for their career direction

### Footer

- Link to GitHub repo: "See the code and full technical documentation"
- Link to technical deep dive if we keep it as a secondary page (optional)

## What stays from the existing draft

- The version evolution table (trimmed)
- The Activity API as the key technical breakthrough
- The scope creep lesson
- The "pragmatic answer" philosophy ("a file with a slightly wrong name is better than no name")

## What's new

- The personal origin story (Notion recommendation, non-technical background)
- The rebuild chapter (Claude Code, Opus, security/code review, demo setup)
- The meta-reflection on building with AI tools

## What gets cut or moved to GitHub

- Detailed naming convention breakdown (now in README)
- Trigger design deep dive (now in README)
- Full code architecture details (now in GitHub repo)
- The "What I'd do differently" section (folded into the narrative naturally)
