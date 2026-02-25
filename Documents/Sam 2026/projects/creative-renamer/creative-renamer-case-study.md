---
tags:
  - case-study
  - creative-renamer
  - project
type: case-study
status: first-draft
---

# Automated File Namer

> My first production code — a Google Apps Script that auto-renames files across 100+ nested Drive folders. Built with Claude, rebuilt with Claude Code.

**Role:** Solo build · Internal tool
**Timeline:** Nov 2024 – ongoing
**Stack:** `Google Apps Script` · `Drive Activity API` · `Google Sheets`
**Code:** [github.com/sambt94/creative-file-renamer](https://github.com/sambt94/creative-file-renamer)

---

### How I got involved

I don't have a computer science background. I came to this from the marketing and product side — the kind of person who uses tools, not builds them.

But I'd spent months figuring out how to work effectively with Claude, particularly around Notion workflows. When a creative production team needed someone to automate their file naming process, I was recommended — not because I could code, but because I'd shown I could get things done with AI tools.

I said yes because I wanted to try. I had no idea if I could actually build something that a team would use in production. That uncertainty was the point.

[PLACEHOLDER: Personal details — who recommended you? What was the team like? What did it feel like to say yes to something you weren't sure you could do? This is the emotional hook for the whole piece.]

---

### The problem

The team was dealing with hundreds of creative files spread across deeply nested Google Drive folders. Files came in with names like `final_v3_REAL.psd`, `banner copy (2).png`, or just unnamed exports from Figma.

They had a naming convention defined. Nobody followed it. Renaming files manually across 100+ folders was tedious enough that people just didn't do it. Finding the right asset meant digging through folders. Auditing what had been delivered was guesswork.

The naming convention existed on paper but not in practice.

---

### Building it with Claude

This was my first real project built through conversation with an AI. I didn't write code in the traditional sense — I described what I needed, Claude generated it, I tested it, found where it broke, described the problem, and iterated.

The core idea was simple: the folder structure already encodes metadata. A file sitting at `Brand / Angle / Audience / Problem / Message / Language /` should be named `brand_angle_audience_problem_message_language_designer-inputs.ext`. The system just needed to read the folder path, extract each level, and rename the file automatically. Designers upload to the right folder — the system does the rest.

What wasn't simple was getting it to work reliably at scale. The architecture went through five versions:

| Version | What changed | What I learned |
|---------|-------------|----------------|
| POC | Recursive folder scan every 5 min | The concept works — on 10 folders |
| V1 | Unified script + Google Sheets logging | The team prefers Sheets over Notion |
| V2 | Added snapshots, state tracking, dashboards | I was building too much |
| V3.1 | Stripped back to rename + log only | Focus on the core value |
| V5 | Switched to Drive Activity API | The real architectural breakthrough |

Each version taught me something, and not always about code.

**Hitting the wall with performance.** The POC scanned every folder on every run. That works for a test folder with 10 subfolders. It doesn't work for 100+ folders when Google Apps Script gives you a 6-minute execution limit. I went through folder path caching, ancestor shortcutting, and eventually landed on the Drive Activity API — which flipped the whole approach. Instead of scanning all folders looking for new files, I asked Google "what files had activity recently?" and only processed those. That was the real breakthrough.

[PLACEHOLDER: Do you remember the moment you discovered the Activity API approach? Or the frustration before it? What was the back-and-forth with Claude like during this phase?]

**Building too much, then cutting back.** V2 was ambitious. Historical snapshots, file state tracking, reporting dashboards — I was designing a full production tracking system. It took months to realise the team needed one thing: files renamed correctly. V3.1 stripped everything else away. The tracking ambitions were interesting engineering problems, but they weren't what the team was waiting for.

**Making it work in the real world.** My proof of concept ran on my personal Google account with test files I created. Production meant shared drives, different file ownership, folders created by different team members, and files at unexpected depths. The pragmatic answer: validate and flag issues, but rename anyway. A file with a slightly wrong name is better than a file with no name.

[PLACEHOLDER: Any specific stories from the "works on my Drive" → production transition? Moments where something broke unexpectedly? How the team reacted when it first started working?]

---

### The result

The script runs every 15 minutes on a scheduled trigger. It's been zero maintenance since deployment.

- Eliminates manual file renaming across 100+ nested folders
- Processes files in 2-5 minutes per run
- Full audit trail — every rename is logged with old name, new name, and folder path
- The team finds any asset in seconds through consistent, structured naming

It's "just" an Apps Script. But it solved a real problem for a real team, and it's been running quietly in the background ever since.

---

### Rebuilding it

Months later, I came back to this project — but with different tools.

The original was built through chat conversations with Claude. Long back-and-forth threads where I'd describe a problem, get code back, paste it into the Apps Script editor, test it, find issues, and iterate. It worked, but it was slow and I was always context-switching between the conversation and the editor.

This time I used Claude Code with Opus. The difference was immediate. Instead of chat-based iteration, I had a structured engineering workflow — security reviews, code quality checks, parallel analysis that ran simultaneously. In one session, I:

- Rebuilt the script for a public GitHub repo — stripping private data, generalising the field names, writing full documentation
- Ran a security review that found real vulnerabilities (spreadsheet formula injection via crafted filenames — something I'd never have thought to check)
- Ran a code review that identified performance bottlenecks (the script was opening the spreadsheet separately for every single file rename)
- Built a one-click demo setup — helper functions that create the folder structure and logging spreadsheet automatically

The security findings were genuinely surprising. A filename like `=HYPERLINK("evil.com","click")` would get written straight into the spreadsheet and execute as a formula. That's the kind of issue that separates "it works" from "it works safely."

[PLACEHOLDER: What did the rebuild feel like compared to the first time? What surprised you about using Claude Code vs chat? Any specific moment where you thought "this is a completely different experience"?]

---

### What I learned

This project spans about 14 months, from a proof of concept I wasn't sure I could build to a public GitHub repo with documentation, security hardening, and a demo.

The technical stuff matters — the Activity API, folder caching, batch writes. But the real lesson is about what's possible when you combine domain knowledge with AI tools. I understood the problem deeply because I'd worked in production teams. I didn't know how to write the solution. Claude bridged that gap — first through conversation, then through a more structured workflow.

Building with AI isn't magic. It's a lot of iteration, a lot of "that didn't work, let's try this instead," and a lot of learning to ask the right questions. But it means someone with a non-technical background can build real tools that solve real problems. That's a big deal.

[PLACEHOLDER: Personal reflection — what does this mean for where you're going? How has this project shaped how you think about building things? This is the closing thought that ties back to your broader brand narrative about marketing → product → building.]

---

*See the [full source code and technical documentation](https://github.com/sambt94/creative-file-renamer) on GitHub.*
