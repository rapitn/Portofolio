# RapI's Portfolio Website

## Overview
Personal portfolio website for **RapI's** — a Full-Stack Developer. Light, minimalist, Apple-style glass design showcasing skills, background, and contact info.

## Tech Stack
- Framework: Next.js (App Router) with TypeScript
- Styling: Tailwind CSS v4 (light theme via `@theme` in `app/globals.css`)
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: No external fonts loaded (Google Fonts removed for performance). UI uses native system stack via `font-sf` and Tailwind's default `font-mono`

## Theme & Design

- Mode: Light (Apple-style **glassmorphism** — spec: `document/design/Glassmorphism.md`)
- Background: `paper` `#FAFAF8` with fixed ambient color orbs in `body::before` (blue/violet radial gradients, static layer)
- Text primary: `ink` `#1D1D1F`
- Text secondary: `ink-secondary` `#86868B`
- Text tertiary: `ink-tertiary` `#A1A1A6`
- Card bg: `card` `#FFFFFF`
- Border: `card-border` rgba(0,0,0,0.06)
- Accent: `accent` `#007AFF`
- Glass tokens: `glass` rgba(255,255,255,0.5), `glass-strong` rgba(255,255,255,0.65), `glass-highlight` rgba(255,255,255,0.85), `glass-border` rgba(255,255,255,0.45), `glass-deep` rgba(255,255,255,0.08)
- Glass utilities: `glass-surface` (frosted panel: `bg-glass` + `backdrop-blur(16px)` + white border + inset top highlight) and `glass-tile` (small icon/chip tile: lighter blur 8px)
- Glass, `bg-paper`, `font-sf`

## Pages

### 1. Home (`/`)
- Hero section with name "RapI's" large and bold
- Tagline: "Full-Stack Developer"
- Profile photo (file: `public/profile.jpg`)
- Brief intro line
- Scroll indicator or navigation hint
- Floating/smooth entrance animation

### 2. About (`/about`)
- Section heading: "Tentang Saya"
- Short intro paragraph about who RapI's is
- Background info, learning journey
- Fade-in animation on scroll

### 3. Skills (`/skills`)
- Section heading: "Keterampilan"
- Skill cards in a responsive grid:
  - **Python** — icon + brief description
  - **C++** — icon + brief description
  - **HTML/CSS** — icon + brief description
- Each card: hover lift effect, icon, title, description
- Skills level indicator (progress bar or badge)

### 4. Projects (`/projects`)
- Section heading: "Proyek"
- Empty state message: "Belum ada proyek yang ditampilkan"
- Placeholder for future projects

### 5. Contact (`/contact`)
- Section heading: "Kontak"
- Contact info (email, GitHub)
- Contact form (name, email, message) — submit opens a pre-filled `mailto:rafitrinugraha@gmail.com`

### 6. Navigation (`/components/navbar.tsx`)
- Fixed top navbar
- Links: Beranda, Tentang, Keterampilan, Proyek, Kontak
- GitHub icon linking to https://github.com/rapitn
- Active link highlighting
- Responsive (hamburger menu on mobile)

### 7. Footer (`/components/footer.tsx`)
- Social links (GitHub)
- Copyright text
- Subtle background

## File Structure
```
Porto Web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── icon.svg
│   ├── about/
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── skill-card.tsx
│   ├── project-card.tsx
│   ├── contact-form.tsx
│   └── page-meta.tsx
├── public/
│   └── profile.jpg
├── next.config.ts
├── tsconfig.json
├── package.json
└── AGENTS.md
```

## Component Specifications

### Navbar
- Fixed position, full width
- Floating glass pill (`glass-surface`, `backdrop-blur(16px)` [limited per perf], white border + inset highlight)
- Logo text "RapI's" in `text-ink`, hover to accent
- Nav links: `text-ink-secondary`, active link `text-ink`
- GitHub icon (`glass-tile`) on the right
- Mobile: hamburger menu with glass dropdown (`glass-surface`)

### Hero
- Centered content, vertical spacing, min-h-screen
- Name: `font-sf text-5xl md:text-7xl font-bold text-ink`
- Tagline: text-lg md:text-xl `text-ink-secondary` with accent dot
- Profile photo: circular, `border-white/80 bg-white` with soft shadow + accent glow (`blur-xl` [perf])
- Fade-in + slide-up staggered animation on load

### Skill Card
- Background: `glass-surface` rounded-[24px]
- Icon (Lucide) in `glass-tile`
- Title: bold `text-ink`
- Description: `text-ink-secondary`
- Progress bar: track `bg-ink/[0.08]`, fill `bg-accent`, level label in `text-accent`
- Hover: `-translate-y-1.5`, softer/larger shadow
- Transition: duration-300

### Footer
- Centered, padding, top border `border-white/40`
- GitHub + Email icon links (`glass-tile`), hover to accent
- Copyright: "© {year} RapI's"
- Background: `bg-paper-deep/40` (subtle, lighter than main)

## Animations
- Page transitions: fadeIn (opacity 0 → 1)
- Scroll-triggered: elements slide up from bottom
- Card hover: translateY + glow shadow
- Smooth scroll for nav links
- Staggered animation for skill cards
- Perf: scroll arrow uses CSS `@keyframes float`/`.animate-float` (not a framer-motion rAF loop); transitions target specific properties (`transition-[transform,border-color,box-shadow]`, never `transition-all`); below-fold sections use `.cv-auto` (`content-visibility: auto`)

## Notes
- Profile photo: `public/profile.jpg`
- No projects yet — show empty placeholder state
- All text in Indonesian (except tech terms)
- Fully responsive (mobile-first)
- Per-page SEO title/description via `components/page-meta.tsx` (client pages can't `export metadata`)
- Favicon: `app/icon.svg` (auto-served at `/icon.svg`)
- `.gitignore` excludes unrelated cloned repos `stop-slop/` & `awesome-copilot/` (also in tsconfig `exclude` + eslint `globalIgnores`)