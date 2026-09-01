"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

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
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// proyek"}</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Proyek
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Karya yang sedang dan akan saya bangun.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-16 w-full max-w-md rounded-3xl border border-dashed border-border bg-card p-12 text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-card-dark">
          <FolderOpen className="h-10 w-10 text-muted" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-white">
          Belum ada proyek yang ditampilkan
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Saya sedang mengerjakan beberapa proyek. Karya baru akan muncul di
          sini.
        </p>
      </motion.div>
    </motion.div>
  );
}
