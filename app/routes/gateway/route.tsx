import {
  BadgeCheck,
  BrainCog,
} from "lucide-react";

import { Button } from "~www/components/button";

const ENDPOINTS = [
  { method: "POST", path: "/chat/completions" },
  { method: "POST", path: "/embeddings" },
  { method: "GET", path: "/models" },
];

const MODELS = [
  {
    name: "Model C",
    temperature: "0 .. 1",
    reasoning: "Low / High",
    retries: "1",
  },
  {
    name: "Model G",
    temperature: "0 .. 2",
    reasoning: "#Tokens",
    retries: "3",
  },
];

const FEATURES = [
  "Normalized Configuration",
  "Insights & Control",
  "Access Management",
];

export function meta() {
  return [
    { title: "Hebo AI Gateway: " },
    {
      name: "description",
      content:
        "Every model claims compatibility. Every model behaves differently. Hebo sits between that promise and reality.",
    },
  ];
}

export default function Gateway() {
  return (
    <>
      <section
        className="mx-auto max-w-4xl bg-[url('/gateway-hero-bg.png')] bg-size-[60%_auto] bg-center bg-no-repeat"
      >
        <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr_1.1fr]">
          <div className="order-2 flex flex-col items-center sm:order-1 sm:flex-col sm:items-start">
            <img
              src="/hebo-gateway.png"
              alt="Hebo AI Gateway"
              className="z-10 ml-10 w-24 h-24"
            />
            <div className="flex w-full max-w-xs flex-col gap-2">
              {ENDPOINTS.map((endpoint) => (
                <div
                  key={endpoint.path}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/90 px-3 py-2 text-sm font-semibold shadow-sm"
                >
                  <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs text-indigo-800">
                    {endpoint.method}
                  </span>
                  <span className="text-nowrap">{endpoint.path}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-md flex-col items-center gap-5 text-center pt-5 sm:order-2">
            <div className="flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-800 shadow-inner">
              <BrainCog className="h-12 w-12" strokeWidth={2.4} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold sm:text-5xl">
                Hebo AI
                <br />
                Gateway
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              <Button
                render={
                  <a
                    href="https://console.hebo.ai/playground"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
                className="h-10 rounded-xl bg-indigo-900 px-5 text-background hover:bg-indigo-800"
              >
                Get Started &gt;
              </Button>
              <Button
                render={
                  <a href="https://hebo.ai/docs" target="_blank" rel="noreferrer" />
                }
                nativeButton={false}
                variant="outline"
                className="h-10 rounded-xl border-2 border-indigo-900 px-5 text-indigo-900"
              >
                Docs
              </Button>
            </div>
          </div>

          <div className="order-3 flex w-full flex-col gap-3 sm:order-3">
            {MODELS.map((model) => (
              <div
                key={model.name}
                className="flex flex-col gap-1 rounded-xl border border-border bg-white/90 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold">{model.name}</div>
                <div className="text-sm text-muted-foreground">
                  Temperature: {model.temperature}
                </div>
                <div className="text-sm text-muted-foreground">
                  Reasoning: {model.reasoning}
                </div>
                <div className="text-sm text-muted-foreground">
                  Retries: {model.retries}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 text-center sm:flex-row sm:flex w-fit mx-auto">
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex flex-row items-center justify-center gap-1 sm:p-3 text-sm font-semibold sm:text-base"
            >
              <BadgeCheck className="h-5 w-5 text-indigo-800" />
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-2 text-base leading-relaxed font-normal">
        <h2 className="text-xl font-semibold">
          “Chat Completions” looks standard. The behavior underneath isn’t.
        </h2>
        <p>
          On paper, <strong>“Chat Completions” looks like a solved problem</strong>.
          Most models expose a familiar endpoint, most SDKs assume compatibility,
          and the industry treats it as a standard. <strong>In practice, it isn’t.</strong>
        </p>

        <p>
          Every provider implements the interface slightly differently.{" "}
          <em>Temperature ranges don’t line up</em>.{" "}
          Reasoning is expressed in tokens for some models and <em>levels</em> for others.
          Tool calling may require thought signatures, hidden flags, or model-specific syntax.
          Even retries behave differently — some failures disappear on a second call, others don’t.
        </p>

        <p>
          These differences may look small at first, but <strong>they compound quickly</strong>.
          Switching models, or even upgrading the same model version, usually means redeploying.
          Configuration that should be operational ends up <strong>hard-coded</strong>.
          Seemingly trivial changes like adjusting <em>reasoning effort</em> or <em>temperature</em>
          ripple through application code.
        </p>

        <p>
          At the same time, visibility is fragmented.
          Latency lives in one console, token usage in another, errors somewhere else entirely.
          Cloud provider dashboards are powerful, but they’re not designed around how teams
          actually iterate on AI systems.{" "}
          <strong>Answering basic questions—<em>what happened, where, and why</em>, takes far too long.</strong>
        </p>

        <p>
          Access control adds another layer of complexity.
          As soon as you have multiple developers, projects, and agents,
          permissions and quotas turn into a brittle configuration problem
          rather than a simple policy decision.
        </p>

        <p>
          Hebo exists to sit in the middle of this.
          We built our own gateway to separate <strong>model behavior</strong>{" "}
          from <strong>application logic</strong>.
          The goal isn’t just routing requests, but <em>normalizing the rough edges</em>{" "}
          so a single Chat Completions endpoint behaves consistently across models
          while remaining compatible with common SDKs like{" "}
          <strong>OpenAI</strong>, <strong>Vercel AI SDK</strong>, and <strong>LangChain</strong>.
        </p>

        <p>
          This is intentionally different from gateways that simply pass requests through.
          Passing through preserves the differences.{" "}
          <strong>Hebo absorbs them.</strong>
        </p>

        <p>
          You can start with our managed providers and free tiers, then progressively{" "}
          <strong>bring your own credentials</strong> and credits from{" "}
          <strong>Groq</strong>, <strong>AWS</strong>, <strong>GCP</strong> or others. All{" "}
          without changing how your application talks to models.
        </p>

        <p>
          <strong>This is the foundation.</strong>{" "}
          The rest builds on top of it.
        </p>
      </section>
    </>
  );
}
