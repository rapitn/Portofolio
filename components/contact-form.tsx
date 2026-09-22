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

    const subject = `[Portofolio] Pesan dari ${form.name}`;
    const body = `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:rafitrinugraha@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-white/50 bg-glass px-4 py-3 text-sm text-ink backdrop-blur-sm placeholder:text-ink-tertiary/70 outline-none transition-[border-color,box-shadow] focus:border-accent focus:shadow-[0_0_0_4px_rgba(0,122,255,0.12)]";

  if (sent) {
    return (
      <div className="glass-surface flex flex-col items-center justify-center rounded-3xl p-10 text-center">
        <div className="glass-tile flex h-14 w-14 items-center justify-center rounded-full text-2xl text-accent">
          ✓
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">Pesan Terkirim!</h3>
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
            className="mb-1.5 block text-sm font-medium text-ink-secondary"
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
            className="mb-1.5 block text-sm font-medium text-ink-secondary"
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
          className="mb-1.5 block text-sm font-medium text-ink-secondary"
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-3.5 text-sm font-bold text-paper shadow-xl shadow-accent/30 transition-[scale,box-shadow] hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/40 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Kirim Pesan
      </button>
    </form>
  );
}
