"use client";

import { motion } from "framer-motion";

export type Skill = {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: number;
  iconBg: string;
  iconColor: string;
};

export default function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.4)]"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ backgroundColor: skill.iconBg, color: skill.iconColor }}
      >
        {skill.icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-white">{skill.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {skill.description}
      </p>

      <div className="mt-6 w-full">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            Tingkat
          </span>
          <span className="font-mono text-xs font-medium text-accent">
            {skill.level}%
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#111827]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
