"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import GithubIcon from "@/components/github-icon";
import ContactForm from "@/components/contact-form";
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

export default function ContactPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:px-8"
    >
      <PageMeta
        title="Kontak — RapI's"
        description="Hubungi RapI's melalui email atau GitHub untuk kerja sama dan pertanyaan."
      />
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// kontak"}</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Kontak
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-secondary sm:text-lg">
          Ada pertanyaan atau tawaran kerja sama? Hubungi saya.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <motion.div variants={item} className="space-y-4 lg:col-span-2">
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-surface flex items-center gap-4 rounded-2xl p-5 transition-[box-shadow] hover:shadow-[0_20px_45px_-16px_rgba(0,122,255,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            <div className="glass-tile flex h-12 w-12 items-center justify-center rounded-xl text-accent">
              <GithubIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-ink">GitHub</div>
              <div className="font-mono text-sm text-ink-secondary">github.com/rapitn</div>
            </div>
          </a>

          <div className="glass-surface flex items-center gap-4 rounded-2xl p-5">
            <div className="glass-tile flex h-12 w-12 items-center justify-center rounded-xl text-accent">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-ink">Email</div>
              <div className="font-mono text-sm text-ink-secondary">
                rafitrinugraha@gmail.com
              </div>
            </div>
          </div>

          <div className="glass-surface flex items-center gap-4 rounded-2xl p-5">
            <div className="glass-tile flex h-12 w-12 items-center justify-center rounded-xl text-accent">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-ink">Lokasi</div>
              <div className="text-sm text-ink-secondary">Indonesia</div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="lg:col-span-3">
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
