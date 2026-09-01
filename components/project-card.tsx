import { Folder, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.4)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card-dark text-accent">
            <Folder className="h-6 w-6" />
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label={`Buka ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
        <h3 className="mt-6 text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
