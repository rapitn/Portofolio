"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Palette } from "lucide-react";
import SkillCard from "@/components/skill-card";
import type { Skill } from "@/components/skill-card";

const skills: Skill[] = [
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Python",
    description:
      "Backend, otomasi, dan scripting. Kode yang rapi dan mudah dibaca.",
    level: 75,
    iconBg: "#0F3460",
    iconColor: "#00E5FF",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "C++",
    description:
      "OOP, algoritma, dan struktur data dengan performa tinggi.",
    level: 70,
    iconBg: "#1F2937",
    iconColor: "#60A5FA",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "HTML/CSS",
    description:
      "Halaman web yang responsif dan semantik dengan gaya bersih.",
    level: 80,
    iconBg: "#312E81",
    iconColor: "#F472B6",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-2xl text-center"
      >
        <motion.span
          variants={item}
          className="font-mono text-sm uppercase tracking-widest text-accent"
        >
          {"// kemampuan"}
        </motion.span>
        <motion.h1
          variants={item}
          className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Keterampilan
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          Teknologi dan bahasa yang saya pakai untuk membangun aplikasi dari
          ujung ke ujung.
        </motion.p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-20 max-w-3xl rounded-2xl border border-border bg-card p-8"
      >
        <h2 className="text-xl font-bold text-white">
          Juga paham tentangnya
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Git & GitHub",
            "Terminal / CLI",
            "Algoritma",
            "OOP",
            "Responsive Design",
            "Problem Solving",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card-dark px-4 py-1.5 font-mono text-sm text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
