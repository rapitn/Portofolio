"use client";

import { motion } from "framer-motion";

export type Skill = {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: number;
};

export default function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="group flex flex-col rounded-[24px] bg-card border border-card-border p-7 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink/[0.04] text-ink transition-colors group-hover:bg-ink/[0.08]">
        {skill.icon}
      </div>

      <h3 className="mt-6 font-sf text-xl font-bold tracking-tight text-ink">
        {skill.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
        {skill.description}
      </p>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-tertiary">
            Tingkat
          </span>
          <span className="text-xs font-bold text-accent">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 + index * 0.1 }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>
    </motion.article>
  );
}
