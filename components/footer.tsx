import GithubIcon from "@/components/github-icon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="cv-auto border-t border-white/40 bg-paper-deep/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-tile flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary transition-[background-color,color] hover:bg-glass-strong hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:rafitrinugraha@gmail.com"
            aria-label="Email"
            className="glass-tile flex h-10 w-10 items-center justify-center rounded-full text-ink-secondary transition-[background-color,color] hover:bg-glass-strong hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="font-sf text-sm text-ink-secondary">
          © {new Date().getFullYear()} RapI&apos;s
        </p>
      </div>
    </footer>
  );
}
