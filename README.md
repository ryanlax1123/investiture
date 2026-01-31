# Investiture

A learning scaffold for designers who want to use Claude Code to build real applications.

---

## What This Is

Investiture is an architecture scaffold — folders, separation of concerns, and a CLAUDE.md that teaches your AI assistant how to write clean code. It's a spaghetti-free zone for vibe coding. Clone it, open it in Claude Code, and start building. The structure keeps you from painting yourself into corners.

The name comes from Brandon Sanderson's Cosmere: Investiture is the underlying magical energy that manifests differently on each world. Same power source, different expressions.

---

## What This Is Not

This is not Tailwind. This is not Bootstrap. Investiture gives you **zero styles, zero layouts, zero components**. Run it and you get a blank screen. That's the point.

It's unopinionated about your UI — it only cares about where your code lives. Bring your own design system, or ask Claude to build one.

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher

---

## Quick Start

```bash
git clone https://github.com/erikaflowers/investiture.git
cd investiture
npm install
npm run dev
```

The documentation site runs at `http://localhost:8080`.

For the React demo:
```bash
npm run dev:demo
```

---

## Project Structure

```
investiture/
├── _data/              # Site data (nav, config)
├── _includes/          # Nunjucks templates
├── demo/               # React demo app
│   ├── App.jsx         # Demo component
│   ├── App.css         # Styles with CSS variables
│   ├── main.jsx        # React mount
│   └── index.html      # Entry point
├── index.njk           # Home page
├── demo.njk            # Demo showcase page
├── docs.njk            # Documentation
├── getting-started.njk # Setup guide
├── eleventy.config.cjs # Eleventy config
├── package.json        # Dependencies
└── styles.css          # Site styles
```

---

## The React Demo

The demo showcases minimal React patterns:

- **Counter** — useState hook, click handler
- **Theme toggle** — CSS variables, state-driven classes
- **Reveal card** — CSS transitions, conditional rendering

Open the demo in Claude Code and try:

> **"Add a color picker that changes the background."**

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the documentation site |
| `npm run dev:demo` | Start the React demo in dev mode |
| `npm run build` | Build everything for production |
| `npm run build:demo` | Build just the React demo |

---

## Philosophy

- **Learn by doing** — Not tutorials, actual building
- **AI-readable** — Clean structure Claude can navigate
- **Minimal by design** — No auth, no database, no complexity
- **Taste matters** — Dark theme, subtle animations, considered spacing

---

## License

MIT
