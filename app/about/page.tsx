"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users, Code2, Target } from "lucide-react";

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

const highlights = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Full-Stack Mindset",
    text: "Paham alur kerja dari frontend hingga backend.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Berorientasi Tujuan",
    text: "Fokus pada hasil yang rapi dan efisien.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Terus Belajar",
    text: "Mengasah skill dan mengeksplorasi teknologi baru.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Kolaboratif",
    text: "Senang bekerja sama dan berbagi pengetahuan.",
  },
];

export default function AboutPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto w-full max-w-5xl px-6 pb-24 pt-32 md:px-8"
    >
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// tentang"}</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Tentang Saya
        </h1>
      </motion.div>

      <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
        <motion.div variants={item} className="relative mx-auto">
          <div className="absolute -inset-2 rounded-full bg-accent/20 blur-3xl" />
          <Image
            src="/profile.jpg"
            alt="Foto profil RapI's"
            width={280}
            height={280}
            className="relative h-64 w-64 rounded-full border-4 border-accent object-cover md:h-72 md:w-72"
          />
        </motion.div>

        <motion.div variants={item}>
          <h2 className="text-2xl font-bold text-white">
            Halo, saya <span className="text-accent">RapI&apos;s</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Saya Full-Stack Developer. Saya membangun aplikasi web yang
            fungsional dan mudah dipakai. Saya mulai dari HTML dan CSS, lalu
            belajar Python dan C++ untuk menangani bagian backend.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Saya suka memecahkan masalah dan menulis kode yang bersih. Saat ini
            saya asah kemampuan backend dan frontend agar bisa menyelesaikan
            proyek dari ujung ke ujung.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <motion.div
            key={h.title}
            variants={item}
            className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.4)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark text-accent">
              {h.icon}
            </div>
            <h3 className="mt-4 font-bold text-white">{h.title}</h3>
            <p className="mt-2 text-sm text-muted">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
