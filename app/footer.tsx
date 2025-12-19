import { Brain, Gauge, SquareFunction } from "lucide-react";
import { Button } from "./components/button";

export default function Footer() {
  return (
    <footer className="flex flex-col mb-5 gap-10">
      <section className="max-w-5xl mx-auto border border-border rounded-xl p-6 bg-sidebar">
        <div className="relative grid sm:grid-cols-[1.3fr_1fr] sm:items-center gap-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-4">
            <img src="/hebo.png" alt="Hebo Cloud" width={128} height={128} />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold sm:text-3xl">Hebo Cloud</h2>
              <p className="text-muted-foreground">
                Hebo is the fastest way to build and scale{" "}
                <span className="text-nowrap">high-quality</span> conversational
                agents.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
                <Button render={<a href="https://console.hebo.ai" target="_blank" rel="noreferrer" />} nativeButton={false} className="font-semibold">
                  Try Hebo Cloud
                </Button>
                <Button variant="ghost" render={<a href="https://console.hebo.ai" target="_blank" rel="noreferrer" />} nativeButton={false} className="hover:underline">
                  Start for free →
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-3 gap-3">
            <a className="contents" href="/gateway">
              <div className="flex sm:flex-col gap-2 rounded-xl bg-background/70 p-4 hover:bg-background">
                <Brain size={40} />
                <div>
                  <div className="font-semibold sm:text-sm">Gateway &gt;</div>
                  <div className="text-muted-foreground text-xs">
                    Instant access to SOTA LLM models
                  </div>
                </div>
              </div>
            </a>
            <a className="contents" href="/mcp">
              <div className="flex sm:flex-col gap-2 rounded-xl bg-background/70 p-4 hover:bg-background">
                <SquareFunction size={40} />
                <div>
                  <div className="font-semibold sm:text-sm">MCP &gt;</div>
                  <div className="text-muted-foreground text-xs">
                    Ready-to-use tools via our hosted MCP
                  </div>
                </div>
              </div>
            </a>
            <a className="contents" href="/evals">
              <div className="flex sm:flex-col gap-2 rounded-xl bg-background/70 p-4 hover:bg-background">
                <Gauge size={40} />
                <div>
                  <div className="font-semibold sm:text-sm">Evals &gt;</div>
                  <div className="text-muted-foreground text-xs">
                    Human-first evals, written in Markdown
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-1">
          <img src="/icon.png" alt="Hebo Logo" width={16} height={16} />
          <span className="font-semibold"> hebo.ai</span>
          <span>is designed, built and backed by</span>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="https://8monkey.ai/icon.png"
            alt="8monkey Logo"
            width={16} height={16}
          />
          <span className="font-semibold">Infinite Monkey AI Sdn Bhd</span>
          <span>(202501003121)</span>
        </div>
      </div>
    </footer>
  );
}
