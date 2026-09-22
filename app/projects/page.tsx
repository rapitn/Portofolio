"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import PageMeta from "@/components/page-meta";

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

export default function ProjectsPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-24 pt-32 md:px-8"
    >
      <PageMeta
        title="Proyek — RapI's"
        description="Kumpulan proyek yang sedang dan akan dibangun RapI's."
      />
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// proyek"}</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Proyek
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
          Karya yang sedang dan akan saya bangun.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="glass-surface mt-16 w-full max-w-md rounded-3xl border border-dashed border-white/60 p-12 text-center"
      >
        <div className="glass-tile mx-auto flex h-20 w-20 items-center justify-center rounded-full">
          <FolderOpen className="h-10 w-10 text-ink-secondary" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-ink">
          Belum ada proyek yang ditampilkan
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          Saya sedang mengerjakan beberapa proyek. Karya baru akan muncul di
          sini.
        </p>
      </motion.div>
    </motion.div>
  );
}
