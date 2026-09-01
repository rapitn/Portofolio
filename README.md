# RapI's Portfolio

Personal portfolio for **RapI's**, a Full-Stack Developer. Built with a dark, minimalist design to showcase skills, background, and contact info.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) with TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion) for animations
- [Lucide React](https://lucide.dev) + custom SVG for icons
- Google Fonts — Inter (body), JetBrains Mono (code)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Create an optimized build       |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |

## Pages

| Route       | Content                                             |
| ----------- | --------------------------------------------------- |
| `/`         | Hero with profile photo and role tagline            |
| `/about`    | Background and what drives RapI's                   |
| `/skills`   | Python, C++, HTML/CSS with level bars               |
| `/projects` | Placeholder state (no projects yet)                 |
| `/contact`  | Contact details and a message form                  |

## Structure

```
.
├── app/            # Routes and layout
├── components/     # Reusable UI components
│   ├── navbar.tsx      # Fixed nav with mobile menu
│   ├── footer.tsx      # Social links and copyright
│   ├── hero.tsx        # Landing hero section
│   ├── skill-card.tsx  # Skill card with progress bar
│   ├── project-card.tsx# Project card
│   ├── contact-form.tsx# Contact form
│   └── github-icon.tsx # GitHub SVG icon
├── public/         # Static assets (profile.jpg)
└── AGENTS.md       # Project specification
```

## Customization

- Replace `public/profile.jpg` with your own photo.
- Update skill names and levels in `app/skills/page.tsx`.
- Update contact details in `app/contact/page.tsx` and `components/footer.tsx`.

Design tokens (colors, fonts) live in `app/globals.css` under the `@theme` block.

## Notes

- UI text is in Indonesian.
- Projects section shows a placeholder until real work is added.
- Mobile-first, fully responsive.
