"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Send } from "lucide-react";
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
          <div className="absolute -inset-1 rounded-full bg-accent/30 blur-2xl" />
          <Image
            src="/profile.jpg"
            alt="Foto profil RapI's"
            width={192}
            height={192}
            priority
            className="relative h-40 w-40 rounded-full border-4 border-accent object-cover sm:h-48 sm:w-48"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-mono text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          <span className="text-white">Halo, saya </span>
          <span className="text-accent">RapI&apos;s</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 flex items-center gap-2 text-lg font-medium text-muted sm:text-xl"
        >
          <Code2 className="h-5 w-5 text-accent" />
          Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
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
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-[#0A0A0A] shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-accent/50"
          >
            <Send className="h-4 w-4" />
            Hubungi Saya
          </Link>
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll untuk menjelajah
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
