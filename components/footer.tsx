import GithubIcon from "@/components/github-icon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0a0a]/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:rafitrinugraha@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white/70 transition-all hover:border-accent hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} RapI&apos;s
        </p>
      </div>
    </footer>
  );
}
