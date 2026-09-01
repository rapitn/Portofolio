"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import GithubIcon from "@/components/github-icon";
import ContactForm from "@/components/contact-form";

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
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{"// kontak"}</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Kontak
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Ada pertanyaan atau tawaran kerja sama? Hubungi saya.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <motion.div variants={item} className="space-y-4 lg:col-span-2">
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark text-accent">
              <GithubIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-white">GitHub</div>
              <div className="font-mono text-sm text-muted">github.com/rapitn</div>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark text-accent">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-white">Email</div>
              <div className="font-mono text-sm text-muted">
                rafitrinugraha@gmail.com
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark text-accent">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="font-bold text-white">Lokasi</div>
              <div className="text-sm text-muted">Indonesia</div>
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
