# Babushka Swipe — Design Spec

## Overview

A Tinder-style email sorting interface for personal use. Emails appear as cards; arrow keys swipe them into archive, keep, junk, or read later. Rule-based recommendations from babushka-rules.md guide each decision. Every swipe is future training data for smarter auto-sorting.

## Architecture

Standalone local app. No build step, no framework, no auth.

- **Backend:** Node.js + Express. Connects to iCloud + Gmail via IMAP using `imapflow` (modern IMAP client with async/await). Reads `babushka-rules.md` from the babushka-email-mcp project to generate per-email recommendations. REST API serves emails and processes actions.
- **Frontend:** Vanilla HTML/CSS/JS served by Express. Single page with card stack UI, keyboard controls, CSS animations.
- **Credentials:** Environment variables (`BABUSHKA_ICLOUD_PASSWORD`, `BABUSHKA_GMAIL_PASSWORD`). Accounts hardcoded in server config (prototype — Sam's accounts only).

## File Structure

```
projects/babushka-swipe/
├── server.js          — Express server, IMAP logic, rule matcher, REST API
├── rules-parser.js    — Parses babushka-rules.md into structured domain lists
├── public/
│   ├── index.html     — Card UI structure
│   ├── style.css      — Warm, playful styling (grandmother energy)
│   └── app.js         — Swipe logic, animations, keyboard controls, API calls
├── package.json
├── .env.example
└── .env               — Real credentials (gitignored)
```

## API Endpoints

### `GET /emails`

Connects to both IMAP accounts, fetches all INBOX emails (limit 50 per account). For each email, extracts:

- `uid` — IMAP UID
- `account` — "iCloud" or "Gmail"
- `fromName` — sender display name
- `fromEmail` — sender email address
- `domain` — sender domain
- `subject` — decoded subject line
- `preview` — first 200 chars of plain text body
- `date` — email date
- `recommendation` — object with `action` (archive/keep/junk/read-later) and `reason` (Babushka's comment)

Returns combined array sorted by date (newest first).

### `POST /action`

Body: `{ uid: string, account: string, action: "archive" | "keep" | "junk" | "read-later" }`

Performs IMAP operation:

- `archive` — MOVE to Archive (iCloud) or COPY to All Mail + delete (Gmail)
- `keep` — no-op (stays in INBOX)
- `junk` — MOVE to Junk (iCloud) or [Gmail]/Spam (Gmail)
- `read-later` — MOVE to "Babushka/Read Later"

Returns `{ success: true }` or `{ success: false, error: string }`.

## Card UI

Each card displays:

- Sender name + domain (e.g. "Lenny's Newsletter · substack.com")
- Subject line (bold)
- Body preview (2-3 lines, muted)
- Babushka's recommendation line with color indicator
- Account badge — small "iCloud" or "Gmail" pill

## Controls

- **← Left arrow** — Archive (card flies left, orange flash)
- **→ Right arrow** — Keep in inbox (card flies right, green flash)
- **↑ Up arrow** — Read Later (card flies up, blue flash)
- **↓ Down arrow** — Junk (card flies down, red flash)

Arrow key hints displayed below the card stack.

## Bottom Bar

Running tally: "12 sorted · 8 archived · 2 kept · 1 junked · 1 read later"

Remaining count: "5 emails left"

## Empty State

When all cards are swiped: "All done! Your inbox is sparkling, dear" with a celebratory animation (confetti or sparkle).

## Recommendation Logic

Rules parsed from `/private/tmp/babushka-email-mcp/babushka-rules.md`:

| Domain match      | Recommendation | Babushka says                         |
| ----------------- | -------------- | ------------------------------------- |
| Auto-archive list | archive        | "Marketing noise, dear — archive it"  |
| Newsletter list   | read-later     | "Newsletter — save for later?"        |
| Jobs list         | keep           | "Job stuff — keep this one, dear"     |
| Tickets list      | keep           | "Looks like a booking or receipt"     |
| Trusted senders   | keep           | "Important — definitely keep"         |
| Phishing signals  | junk           | "This one smells fishy, dear"         |
| Unknown           | keep           | "Not sure about this one — your call" |

Phishing signals checked:

- Display name vs domain mismatch
- Suspicious TLDs (.xyz, .top, .ru, .cn) on English-language brands
- Domain look-alikes (character substitution)

## Visual Style

Playful and warm — grandmother energy:

- Soft cream/warm white background
- Rounded card corners, subtle shadow
- Warm color palette (soft greens, blues, oranges, reds for actions)
- Gentle card animations with spring-like easing
- Babushka emoji/personality touches
- Clean, readable typography

## Error Handling

- IMAP connection failure on load → "Babushka can't reach your email right now, dear. Check your credentials and try again."
- Action failure on swipe → card bounces back to stack, toast message: "Couldn't do that one, dear — try again"
- Empty inbox on load → "Nothing to sort! Your inbox is already clean, dear"

## Out of Scope (for prototype)

- Mobile touch/swipe (keyboard only for now)
- Authentication / account setup
- Claude API recommendations
- Learning system (tracking swipe patterns)
- Deployment / hosting
- Undo functionality
