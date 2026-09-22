"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GithubIcon from "@/components/github-icon";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Keterampilan", href: "/skills" },
  { label: "Proyek", href: "/projects" },
  { label: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-6 pt-5 md:px-8">
        <div className="glass-surface flex items-center justify-between rounded-[20px] px-5 py-3.5">
          <Link
            href="/"
            className="font-sf text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
          >
            RapI&apos;s
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/rapitn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass-tile flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-[background-color,color] duration-200 hover:bg-glass hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="glass-tile flex h-9 w-9 items-center justify-center rounded-full text-ink-secondary transition-[background-color,color] hover:bg-glass hover:text-ink md:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="glass-surface mt-3 rounded-[20px] px-5 py-4 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive ? "bg-ink/[0.06] text-ink" : "text-ink-secondary hover:text-ink hover:bg-ink/[0.03]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
