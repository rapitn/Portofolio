import GithubIcon from "@/components/github-icon";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-paper-deep/60 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rapitn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] text-ink-secondary transition-all hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:rafitrinugraha@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] text-ink-secondary transition-all hover:border-accent hover:text-accent"
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
