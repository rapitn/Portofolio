# Glassmorphism Design — RapI's Portfolio

Spesifikasi visual **glassmorphism** untuk situs portofolio RapI's.
Seluruh konten, teks, dan fitur situs **tidak berubah** — hanya lapisan visual/styling.

## Prinsip

- **Frosted glass** sebagai permukaan utama (panel / card / navbar terlihat "kaca buram").
- **Ambient color blobs** di belakang panel sebagai sumber warna yang ter-blur oleh kaca.
- Backdrop `blur` yang dijaga **ringan** (`blur-sm`–`blur-md`, dan `blur-xl` hanya untuk glow) agar tetap 60fps.
- Kontras teks tetap tinggi: `ink`, `ink-secondary`, accent `#007AFF`.
- Transisi hanya pada `transform`, `opacity`, `box-shadow`, `border-color` (jangan `transition-all`).

## Palet & Tokens

Tetap pakai token yang sudah ada (`app/globals.css`):

| Token | Nilai | Fungsi |
|---|---|---|
| `paper` | `#FAFAF8` | Background dasar |
| `ink` | `#1D1D1F` | Teks utama |
| `ink-secondary` | `#86868B` | Teks sekunder |
| `ink-tertiary` | `#A1A1A6` | Teks tersier |
| `accent` | `#007AFF` | Aksen/interaktif |
| `card` | `#FFFFFF` | Tetap dipakai utk fallback/solid |

### Token glass baru (ditambahkan ke `@theme`)

| Utility | Nilai | Use |
|---|---|---|
| `glass` | `rgba(255,255,255,0.5)` | Isi panel frosted |
| `glass-strong` | `rgba(255,255,255,0.65)` | Navbar / dropdown |
| `glass-highlight` | `rgba(255,255,255,0.85)` | Highlight tepi atas kartu |
| `glass-border` | `rgba(255,255,255,0.45)` | Border kaca |
| `glass-blur` | `backdrop-filter: blur(16px)` (desktop) / `12px` (mobile) | Frosted effect |
| `glass-deep` | `rgba(255,255,255,0.08)` | Icon tile dalam kartu |

## Background (ambient blobs)

`body` tetap `#FAFAF8`. Sebuah layer `body::before` (sudah ada, dipertahankan):

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 12% -5%, rgba(0,122,255,0.14), transparent 60%),
    radial-gradient(760px 520px at 100% 25%, rgba(124,107,255,0.10), transparent 60%),
    radial-gradient(900px 620px at 30% 115%, rgba(0,122,255,0.10), transparent 60%),
    transparent;
}
```

- Blob biru/ungu lembut di pojok atas-kiri, kanan-tengah, dan bawah — di-blur oleh panel di atasnya.
- Layer `position: fixed` → tidak repaint saat scroll, murah.
- Tidak memakai `background-attachment: fixed` (perf hit).

## Surface Glass (pattern)

Panel utama (card, kartu skill, kartu kontak):

```
bg-glass backdrop-blur-md ring-1 ring-white/70 border border-white/50
shadow-[0_20px_50px_-16px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)]
rounded-2xl / rounded-3xl sesuai layout
```

Komponen: **inner top highlight** (`inset_0_1px_0` putih) → kesan kaca / edge light; border putih semi-transparan.

Icon tile dalam kartu:

```
bg-white/10 backdrop-blur-sm ring-1 ring-white/40 text-accent
```

### Elements per bagian

#### Navbar (`components/navbar.tsx`)
- Pill desktop: `bg-glass-strong/70 backdrop-blur-md ring-1 ring-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]` — frosted tapi tetap readable.
- Dropdown mobile: `bg-glass-strong backdrop-blur-md` + ring putih.
- Ikon GitHub/menu: `bg-glass-deep ring-1 ring-white/50`.

#### Hero (`components/hero.tsx`)
- Foto: glas ring di sekeliling avatar — `ring-4 ring-white/80` + glow accent tetap (blur-xl).
- CTA "Hubungi Saya" tetap solid `bg-ink` (kontras, aksen utama).
- CTA "GitHub" jadi glass: `bg-glass backdrop-blur-sm ring-1 ring-white/60`.
- Scroll hint tetap `animate-float`.

#### Skill Card (`components/skill-card.tsx`)
- Kartu: pattern Surface Glass + `backdrop-blur-md`.
- Icon tile: `bg-white/10 backdrop-blur-sm ring-1 ring-white/40`.
- Progress bar tetap `bg-ink/[0.08]` track + `bg-accent` fill.

#### Project Card (`components/project-card.tsx`)
- Sama dengan Skill Card. Tech chips: `bg-glass-deep ring-1 ring-white/50`.

#### Home preview (`app/page.tsx`)
- Sel kemampuan: pattern Surface Glass kecil (`bg-glass backdrop-blur-sm`).

#### About (`app/about/page.tsx`)
- Foto: ring accent tetap + glass frame.
- Kartu highlights: Surface Glass.

#### Contact (`app/contact/page.tsx`)
- Kartu info: Surface Glass.
- Form (`components/contact-form.tsx`): input `bg-glass backdrop-blur-sm ring-1 ring-white/50 focus:ring-accent`; tombol Kirim tetap solid `bg-ink`.
- State "Pesan Terkirim": Surface Glass + ring accent.

#### Projects (`app/projects/page.tsx`)
- Empty state: Surface Glass sentuh + `border-white/50`.

#### Footer (`components/footer.tsx`)
- Border atas tetap halus; lingkaran ikon jadi glass ring.

## Animasi & Performa
- Semua transisi: `transition-[transform,box-shadow,border-color,background-color]`, **bukan** `transition-all`.
- `.cv-auto` dipertahankan untuk seksi di bawah lipatan (`content-visibility`).
- Glow menggunakan `blur-xl` statis (composited sekali).
- Scroll arrow menggunakan CSS `@keyframes float` (bukan rAF framer-motion).
- `backdrop-blur` dibatasi `sm`–`md` agar tetap mulus di device rendah.

## Checklist
- [ ] Teks & fitur tidak diubah
- [ ] Tokens glass ditambahkan
- [ ] Ambient blobs fixed layer
- [ ] Semua kartu/surface memakai pattern glass
- [ ] Navbar & dropdown frosted
- [ ] Tidak ada `transition-all`
- [ ] Build + lint hijau