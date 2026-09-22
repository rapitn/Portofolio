"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-tertiary/70 outline-none transition-colors focus:border-accent";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/40 bg-white/90 border border-black/[0.06] rounded-3xl p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-2xl">
          ✓
        </div>
        <h3 className="mt-5 text-xl font-bold text-white">Pesan Terkirim!</h3>
        <p className="mt-2 text-sm text-ink-secondary">
          Terima kasih sudah menghubungi — saya akan balas secepatnya.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-white/80"
          >
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Nama kamu"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-white/80"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@contoh.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-white/80"
        >
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tulis pesanmu di sini..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-3.5 text-sm font-bold text-paper shadow-lg shadow-accent/30 transition-all hover:scale-[1.02] hover:shadow-accent/50 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Kirim Pesan
      </button>
    </form>
  );
}
