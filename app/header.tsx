import { Link } from "react-router";

import { Discord, Github, X } from "./components/icons";

export default function Header() {
  return (
    <header>
      <nav className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex flex-row items-center gap-2 font-semibold text-lg sm:text-xl">
          <a href="/" className="contents">
            <img
              src="/icon.png"
              alt="Hebo Logo"
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
            hebo.ai
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <a
            href="https://console.hebo.ai"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Gateway
          </a>
          <a href="/mcp" className="hover:underline">
            MCP
          </a>
          <a href="/evals" className="hover:underline">
            Evals
          </a>
        </div>
        <div className="flex flex-row items-center justify-end gap-6">
          <a
            href="https://x.com/heboai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hebo on X (formerly Twitter)"
          >
            <X size={18} />
          </a>
          <a
            href="https://discord.com/invite/cCJtXZRU5p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Hebo on Discord"
          >
            <Discord size={18} />
          </a>
          <a
            href="https://github.com/8monkey-ai/hebo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
          <a
            href="https://console.hebo.ai"
            target="_blank"
            className="rounded-2xl border-2 border-indigo-800 hover:bg-muted px-4 py-1 text-sm font-medium"
            rel="noreferrer"
            aria-label="Hebo Cloud Console"
          >
            Cloud
          </a>
        </div>
      </nav>
    </header>
  );
}
