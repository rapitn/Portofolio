# Project Status — RapI's Portfolio

> Ringkasan agar tidak bingung saat lanjut kerja. Update file ini seiring progres.

## Ringkasan

Website portfolio pribadi **RapI's** (Full-Stack Developer). Dark mode, minimalis. Semua teks UI berbahasa Indonesia.

**Status: SELESAI dibangun & verified.** Build sukses, lint bersih, server merespons 200.

## Tech Stack

- Next.js **16.3.4** (App Router) — TypeScript
- Tailwind CSS **v4** (konfigurasi via `@theme` di `app/globals.css`, TIDAK pakai `tailwind.config.js`)
- Framer Motion (animasi)
- Lucide React + custom SVG (`github-icon.tsx`, karena lucide sudah hapus brand icon)
- Google Fonts: Inter (body), JetBrains Mono (code)

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
│   └── globals.css        # Tailwind v4 @theme (warna, dll)
├── components/
│   ├── navbar.tsx         # fixed, blur, mobile hamburger, active-link
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── skill-card.tsx
│   ├── project-card.tsx   # (dibuat, saat ini belum dipakai di projects)
│   ├── contact-form.tsx
│   └── github-icon.tsx
├── public/
│   └── profile.jpg        # profil photo (foto asli user sudah dipindah ke sini)
├── (folder proyek lain yang di-clone)
│   ├── stop-slop/         # repo skill
│   └── awesome-copilot/   # repo skill
├── AGENTS.md              # spesifikasi project
├── README.md              # README project (dibuat pakai skill create-readme)
├── PROJECT_STATUS.md      # file ini
└── config: next.config.ts, postcss.config.mjs, tsconfig.json, package.json
```

Catatan: folder `stop-slop/` dan `awesome-copilot/` ada DI DALAM folder proyek ini. Jangan ke-commit ke repo portfolio — tambahkan ke `.gitignore` sebelum push.

## Halaman

| Route       | Konten |
|-------------|--------|
| `/`         | Hero: foto, "Halo, saya RapI's", tagline Full-Stack Developer, CTA, preview skill |
| `/about`    | Intro + 4 kartu highlight |
| `/skills`   | Python (75%), C++ (70%), HTML/CSS (80%) + badge tambahan |
| `/projects` | Empty state "Belum ada proyek yang ditampilkan" |
| `/contact`  | Info kontak + form |

## Detail yang dipakai

- **Email:** `rafitrinugraha@gmail.com` (di `components/footer.tsx` & `app/contact/page.tsx`). Ganti di kedua tempat itu.
- **GitHub:** `https://github.com/rapitn`
- **Level skill** & deskripsi: di `app/skills/page.tsx`. Ubah persentase di sini.

## Status & To Do

- [x] Setup Next.js + deps (framer-motion, lucide-react)
- [x] Semua halaman & komponen
- [x] Build & lint lolos
- [x] README.md dibuat
- [x] Email diganti `rafitrinugraha@gmail.com`
- [ ] **Deploy ke Vercel** — belum dilakukan (lihat di bawah)
- [ ] Ganti `public/profile.jpg` kalau mau pakai foto lain
- [ ] Tambah `.gitignore` entry untuk `stop-slop/` & `awesome-copilot/` (kalau mau di-commit ke GitHub)

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

- Warna tema (background, accent cyan `#00E5FF`, dll): di `app/globals.css` → blok `@theme`
- Font: di `app/layout.tsx` (Inter + JetBrains Mono)
- `next.config.ts` default (tidak ada custom — sudah siap Vercel)
