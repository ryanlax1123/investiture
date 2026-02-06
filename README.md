# Investiture

A React scaffold with clean architecture for learning to build with Claude Code.

---

## Prerequisites

- A Mac
- An internet connection

That's it. The install script handles everything else.

---

## Setup

```bash
git clone https://github.com/erikaflowers/investiture.git
cd investiture
./install.sh
```

This installs Homebrew (if needed), Node.js (if needed), project dependencies,
and creates a CLAUDE.md file that tells Claude Code about your project.

---

## Run

```bash
npm start
```

Your app opens at http://localhost:3000

To see the interactive examples: `npm run examples` (opens at :3001)

---

## What just happened?

When you ran `install.sh`, it:

1. **Checked for Homebrew** — a Mac package manager that installs developer tools
2. **Checked for Node.js** — the JavaScript runtime that runs your app
3. **Installed dependencies** — React and Vite (a fast dev server)
4. **Created CLAUDE.md** — a file that briefs Claude Code on your project structure and rules

Your app is a React component in `src/App.jsx` with styles in `src/App.css`.
When you edit these files, the browser updates automatically.

---

## Architecture

Investiture has four layers. Claude knows to use them:

```
src/              — YOUR APP (start here)
  App.jsx         — Your main component
  App.css         — Your styles

design-system/    — Visual foundation
  tokens.css      — Colors, spacing, typography as CSS variables

content/          — User-facing strings
  en.json         — All text in one place (no hardcoded strings)

core/             — Pure business logic
  utils.js        — Helper functions (no side effects)

services/         — External integrations
  api.js          — API client (swap for your backend)

examples/         — Reference implementations
  App.jsx         — Counter, theme toggle, animations
```

---

## What to do next

Open this project in Claude Code and try these prompts:

1. **"Add a todo list that saves to localStorage"**
   Teaches: state, arrays, useEffect, persistence

2. **"Add a dark mode toggle using the design tokens"**
   Teaches: CSS variables, theme switching, data attributes

3. **"Fetch data from an API and display it"**
   Teaches: async/await, services layer, loading states

---

## The CLAUDE.md file

CLAUDE.md is your AI assistant's briefing document. Claude Code reads it
automatically when it opens your project. It contains:

- Architecture rules (where to put what)
- Do-not rules (patterns to avoid)
- Project structure
- Starter prompts

The starter CLAUDE.md enforces clean architecture. Customize it as you learn.

---

## Project structure

```
investiture/
├── src/                  ← Your app (start here)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.html
├── design-system/        ← CSS variables and tokens
│   └── tokens.css
├── content/              ← User-facing strings
│   └── en.json
├── core/                 ← Pure business logic
│   └── utils.js
├── services/             ← External integrations
│   └── api.js
├── examples/             ← Reference demos
│   └── App.jsx
├── CLAUDE.md             ← Created by install.sh
├── install.sh            ← One-time setup
├── package.json          ← Dependencies and scripts
└── README.md             ← You are here
```

---

## Links

- [Friday livestream recording](TODO_LIVESTREAM_URL)
- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Investiture documentation site](https://erikaflowers.github.io/investiture/)

---

## License

MIT
