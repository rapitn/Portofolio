"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Cpu, Palette, ArrowRight } from "lucide-react";
import Hero from "@/components/hero";

const previewSkills = [
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Python",
    desc: "Backend & scripting",
    bg: "#0F3460",
    color: "#00E5FF",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "C++",
    desc: "OOP & algoritma",
    bg: "#1F2937",
    color: "#60A5FA",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "HTML/CSS",
    desc: "Responsive UI",
    bg: "#312E81",
    color: "#F472B6",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// kemampuan inti"}</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Apa yang saya kerjakan
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {previewSkills.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: s.bg, color: s.color }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="font-bold text-white">{s.title}</div>
                  <div className="text-sm text-muted">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/skills"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-white"
          >
            Lihat semua kemampuan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
