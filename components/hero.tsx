"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import GithubIcon from "@/components/github-icon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div variants={item} className="relative">
          <div className="absolute -inset-2 rounded-full bg-accent/30 blur-xl" />
          <div className="absolute -inset-1 rounded-full bg-white/30 backdrop-blur-md" />
          <Image
            src="/profile.jpg"
            alt="Foto profil RapI's"
            width={192}
            height={192}
            priority
            className="relative h-44 w-44 rounded-full border-[3px] border-white/80 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] object-cover sm:h-52 sm:w-52"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-sf text-5xl font-bold tracking-tighter text-ink sm:text-6xl md:text-7xl"
        >
          <span>RapI&apos;s</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 flex items-center gap-2.5 text-lg font-medium text-ink-secondary sm:text-xl"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg text-base leading-7 text-ink-secondary sm:text-lg"
        >
          Saya membangun aplikasi web dari frontend hingga backend dengan
          Python, C++, dan HTML/CSS. Terbuka untuk kolaborasi dan proyek baru.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-ink px-7 py-3.5 text-sm font-semibold text-paper shadow-xl shadow-ink/10 transition-[scale,box-shadow] hover:scale-[1.03] hover:shadow-2xl"
          >
            <Send className="h-4 w-4" />
            Hubungi Saya
          </Link>
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-surface inline-flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-sm font-medium text-ink transition-[background-color,box-shadow] hover:bg-glass-strong"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2 text-ink-secondary"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll untuk menjelajah
          </span>
          <div className="animate-float">
            <ArrowDown className="h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
