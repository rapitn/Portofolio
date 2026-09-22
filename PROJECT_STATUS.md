# Project Status — RapI's Portfolio

> Ringkasan agar tidak bingung saat lanjut kerja. Update file ini seiring progres.

## Ringkasan

Website portfolio pribadi **RapI's** (Full-Stack Developer). Light mode (Apple-style glass), minimalis. Semua teks UI berbahasa Indonesia.

**Status: SELESAI dibangun & verified.** Build sukses, lint & tsc bersih, server merespons 200.

## Tech Stack

- Next.js **16.3.4** (App Router) — TypeScript
- Tailwind CSS **v4** (konfigurasi via `@theme` di `app/globals.css`, TIDAK pakai `tailwind.config.js`)
- Framer Motion (animasi)
- Lucide React + custom SVG (`github-icon.tsx`, karena lucide sudah hapus brand icon)
- Google Fonts: TIDAK dipakai. Font Inter + JetBrains Mono SUDAH DIHAPUS dari `layout.tsx` (optimasi performa — sebelumnya di-load tapi tidak dipakai). UI pakai stack `font-sf` (sistem); `font-mono` pakai mono stack bawaan Tailwind

## Cara Jalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
npm run start    # serve production
npm run lint     # eslint
```

Scripts ada di `package.json`.

## Struktur

```
D:\VSCODE\app\Porto Web
├── app/
│   ├── page.tsx           # Beranda (Hero + preview skills)
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── projects/page.tsx  # empty state
│   ├── contact/page.tsx
│   ├── layout.tsx         # Navbar + Footer wrap, font setup
│   ├── icon.svg           # favicon (auto-served at /icon.svg)
│   └── globals.css        # Tailwind v4 @theme (warna, dll)
├── components/
│   ├── navbar.tsx         # fixed glass pill, mobile hamburger, active-link
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── skill-card.tsx
│   ├── project-card.tsx   # (dibuat, saat ini belum dipakai di projects)
│   ├── contact-form.tsx   # submit → mailto rafitrinugraha@gmail.com
│   ├── page-meta.tsx      # SEO per halaman (document.title + meta description)
│   └── github-icon.tsx
├── public/
│   └── profile.jpg        # profil photo (foto asli user sudah dipindah ke sini)
├── (folder proyek lain yang di-clone — SUDAH di-gitignore, jangan di-commit)
│   ├── stop-slop/         # repo skill
│   └── awesome-copilot/   # repo skill
├── AGENTS.md              # spesifikasi project
├── README.md              # README project (dibuat pakai skill create-readme)
├── PROJECT_STATUS.md      # file ini
└── config: next.config.ts, postcss.config.mjs, tsconfig.json, package.json
```

Catatan: folder `stop-slop/` dan `awesome-copilot/` ada DI DALAM folder proyek ini. Sudah masuk `.gitignore` (plus tsconfig `exclude` & eslint `globalIgnores`), jadi aman untuk push.

## Halaman

| Route       | Konten |
|-------------|--------|
| `/`         | Hero: foto, "Halo, saya RapI's", tagline Full-Stack Developer, CTA, preview skill |
| `/about`    | Intro + 4 kartu highlight |
| `/skills`   | Python (75%), C++ (70%), HTML/CSS (80%) + badge tambahan |
| `/projects` | Empty state "Belum ada proyek yang ditampilkan" |
| `/contact`  | Info kontak + form |

## Detail yang dipakai

- **Email:** `rafitrinugraha@gmail.com` (di `components/footer.tsx`, `app/contact/page.tsx`, & mailto di `components/contact-form.tsx`). Ganti di ketiga tempat itu.
- **GitHub:** `https://github.com/rapitn`
- **Level skill** & deskripsi: di `app/skills/page.tsx`. Ubah persentase di sini.
- **SEO per halaman** (judul + deskripsi): di `components/page-meta.tsx` via prop; tiap halaman client memanggil `<PageMeta ...>`.
- **Favicon:** `app/icon.svg` (accent `#007AFF`, monogram "R").

## Status & To Do

- [x] Setup Next.js + deps (framer-motion, lucide-react)
- [x] Semua halaman & komponen
- [x] Build & lint lolos (tsc & eslint bersih)
- [x] README.md dibuat
- [x] Email diganti `rafitrinugraha@gmail.com`
- [x] Form kontak → mailto (rafitrinugraha@gmail.com)
- [x] SEO judul/deskripsi per halaman (`components/page-meta.tsx`)
- [x] Favicon `app/icon.svg`
- [x] `.gitignore` entry untuk `stop-slop/` & `awesome-copilot/` (+ tsconfig & eslint)
- [ ] **Deploy ke Vercel** — belum dilakukan (lihat di bawah)
- [ ] Ganti `public/profile.jpg` kalau mau pakai foto lain

## Deploy ke Vercel (belum dikerjakan)

`gh` CLI TIDAK terpasang. `.git` ada (branch `main`, belum ada commit).

### Opsi A — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel        # preview
vercel --prod # production
```

### Opsi B — Git ke GitHub + Vercel Dashboard
```bash
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/rapitn/rapis-portfolio.git
git push -u origin main
```
Lalu buat repo kosong `rapis-portfolio` di github.com/rapitn, dan import di vercel.com.

> PENTING sebelum push: pastikan `stop-slop/` & `awesome-copilot/` tidak ikut ter-commit, dan file `.gitignore` (berisi `node_modules`, `.next`, dst) sudah ada.

## Konfigurasi Penting

- Warna tema (light Apple glass: `paper #FAFAF8`, `ink #1D1D1F`, `ink-secondary #86868B`, `card #FFFFFF`, `card-border rgba(0,0,0,0.06)`, `accent #007AFF`): di `app/globals.css` → blok `@theme`
- Font: `app/layout.tsx` TIDAK memuat Google Fonts (dihapus untuk performa). `font-sf` didefinisikan di `@theme` (`globals.css`)
- `next.config.ts` default (tidak ada custom — sudah siap Vercel)
