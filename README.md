# NeuraLink AI - Enterprise Solutions

Vue 3 landing page built with the **Composition API**, Vite, and Tailwind CSS.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite**
- **Tailwind CSS** (dark mode, custom theme)
- **Iconify** (iconify-icon web component)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Project structure

- `src/components/` – Section components (AppNav, Hero, TrustSignals, Features, Demo, Testimonials, Pricing, CTA, AppFooter, AuraBg)
- `src/composables/` – `useTheme` (dark/light toggle, localStorage), `useReveal` (scroll reveal)
- `src/App.vue` – Root layout and `useReveal` setup
- `src/style.css` – Tailwind directives and custom styles (glass, gradients, reveal, marquee)

## Features

- Dark / light theme with persistence and system preference
- Scroll-triggered reveal animations
- Marquee trust logos
- Interactive demo (hover on task for AI tip)
- Email capture form in CTA
- Aura background (UnicornStudio), optional
