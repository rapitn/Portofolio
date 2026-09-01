# RapI's Portfolio Website

## Overview
Personal portfolio website for **RapI's** — a Full-Stack Developer. Dark mode minimalist design showcasing skills, background, and contact info.

## Tech Stack
- Framework: Next.js (App Router) with TypeScript
- Styling: Tailwind CSS (dark mode)
- Animation: Framer Motion
- Icons: Lucide React
- Fonts: Google Fonts — Inter (primary), JetBrains Mono (code/tech)

## Theme & Design
- Mode: Dark
- Background: `#0A0A0A` to `#1A1A2E` gradient
- Accent: Cyan/electric blue `#00E5FF`
- Text primary: `#FFFFFF`
- Text secondary: `#9CA3AF` (gray)
- Card bg: `#1F2937` / `#111827`
- Border: `#374151`
- Font: Inter (body), JetBrains Mono (code/skills)

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
- Simple contact form (name, email, message)
- Or just display contact links

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
│   └── contact-form.tsx
├── public/
│   └── profile.png
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── AGENTS.md
```

## Component Specifications

### Navbar
- Fixed position, full width
- Dark semi-transparent background (`bg-black/50` with backdrop blur)
- Logo text "RapI's" in accent color
- Nav links: white text, hover to accent color
- GitHub icon (Lucide) on the right
- Mobile: hamburger menu with dropdown

### Hero
- Centered content, vertical spacing
- Name: text-5xl md:text-7xl font-bold
- Tagline: text-lg md:text-xl text-gray-400
- Profile photo: circular, bordered with accent color
- Fade-in + slide-up animation on load

### Skill Card
- Background: `#1F2937` rounded-2xl
- Icon (Lucide) centered at top
- Title: bold white text
- Description: gray text, small
- Hover: `-translate-y-2`, shadow accent color glow
- Transition: duration-300

### Footer
- Centered, padding
- GitHub icon link
- Copyright: "© 2026 RapI's"
- Background: darker than main

## Animations
- Page transitions: fadeIn (opacity 0 → 1)
- Scroll-triggered: elements slide up from bottom
- Card hover: translateY + glow shadow
- Smooth scroll for nav links
- Staggered animation for skill cards

## Notes
- Profile photo placeholder: `public/profile.png` — user will provide
- No projects yet — show empty placeholder state
- All text in Indonesian (except tech terms)
- Fully responsive (mobile-first)