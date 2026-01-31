# Investiture

A minimal React scaffold designed for AI-assisted development with Claude Code.

---

## What is this?

Investiture is a clean starting point for building React apps with AI. No complexity, no boilerplate maze — just a well-structured foundation that Claude Code can read, understand, and extend.

The name comes from Brandon Sanderson's Cosmere: Investiture is the underlying magical energy that manifests differently on each world. Same power source, different expressions.

That's this scaffold. The structure stays clean. What you build with it is up to you.

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

Your app is now running at `http://localhost:3000`.

---

## The Magic

Open this project in **Claude Code** and try this prompt:

> **"Add a color picker that changes the background."**

Watch Claude:
1. Read the existing code structure
2. Understand the component patterns
3. Add a new feature that fits seamlessly

That's it. That's the whole point.

---

## Project Structure

```
investiture/
├── index.html          # Entry point
├── package.json        # Dependencies
├── vite.config.js      # Build config
└── src/
    ├── main.jsx        # React mount
    ├── App.jsx         # Demo component
    └── App.css         # Styles
```

---

## What's Included

The demo page showcases:

- **Animated hero** — CSS keyframe animations on load
- **Counter button** — Basic state with `useState`
- **Theme toggle** — Dark/light mode switching
- **Reveal card** — Show/hide with transitions

Nothing fancy. Just enough to demonstrate the patterns.

---

## Philosophy

- **Minimal by design** — No auth, no database, no state management library
- **Readable code** — Comments where they help, silence where they don't
- **AI-friendly** — Clean structure that Claude can navigate and extend
- **Taste matters** — Dark theme, subtle animations, considered spacing

---

## License

MIT
