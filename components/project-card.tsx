import { Folder, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-surface flex flex-col justify-between rounded-2xl p-8 transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-16px_rgba(0,122,255,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="glass-tile flex h-12 w-12 items-center justify-center rounded-xl text-accent">
            <Folder className="h-6 w-6" />
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary transition-colors hover:text-accent"
              aria-label={`Buka ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
        <h3 className="mt-6 text-lg font-bold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="glass-tile rounded-full px-3 py-1 font-mono text-xs text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
