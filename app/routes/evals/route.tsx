import { Button } from "~www/components/button";
import { CopyButton } from "~www/components/copy-button";

export function meta() {
  return [
    { title: "Hebo Evals: Evaluate Prompts / LLMs / Agents" },
    {
      name: "description",
      content:
        "✔ Use simple markdown to write your evals ✔ Connect to any existing LLM or agent  ✔ Integrate with your existing CI / CD pipelines",
    },
  ];
}

export default function Evals() {
  return (
    <>
      <div
        id="hero"
        className="max-w-4xl w-full mx-auto flex flex-col-reverse items-center gap-8 bg-[url('/hebo-evals.png')] bg-size-[auto_145px] bg-position-[right_calc(100%+50px)] bg-no-repeat sm:flex-row sm:bg-size-[auto_180px] sm:bg-bottom-right"
      >
        <figure
          id="conversation.md"
          className="max-w-3xl w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl sm:max-w-xs p-2"
        >
          <figcaption className="flex items-center justify-center text-sm font-medium text-gray-500">
            conversation.md
          </figcaption>
          <pre className="flex flex-col gap-4 p-4 pt-0 text-xs text-wrap">
            <p>
              ---
              <br />
              <span className="font-semibold text-gray-800">
                Evaluators:
              </span>{" "}
              Guideline Adherence
              <br />
              <span className="font-semibold text-gray-800">Tools:</span> Order
              Mgmt, Hand-off
              <br />
              ---
            </p>

            <p>
              <span className="font-semibold text-purple-800">System:</span> You
              are a helpful and concise assistant for an e-commerce platform.
              Keep answers short and friendly.
            </p>

            <p>
              <span className="font-semibold text-blue-800">User:</span> Hi! Can
              you track my order?
            </p>

            <p>
              <span className="font-semibold text-purple-800">Assistant:</span>{" "}
              Of course! Could you share your order ID, please?
            </p>

            <p>
              <span className="font-semibold text-blue-800">User:</span> Sure,
              it&apos;s #8927341.
            </p>

            <p>
              <span className="font-semibold text-gray-800">Tool:</span> Order
              Mgmt(#8927341)
            </p>

            <p>
              <span className="font-semibold text-purple-800">Assistant:</span>{" "}
              Thanks! Your order is on the way and should arrive tomorrow.
            </p>
          </pre>
        </figure>

        <div id="message" className="flex flex-col gap-4">
          <div className="text-3xl sm:text-4xl font-light">Hebo Evals</div>
          <div className="max-w-md text-4xl sm:text-5xl font-medium">
            Evaluate{" "}
            <span className="underline decoration-dotted">Prompts</span> /{" "}
            <span className="underline decoration-dotted">LLMs</span> /{" "}
            <span className="underline decoration-dotted">Agents</span>{" "}
          </div>
          <ul className="text-lg/7">
            <li>✔ Write evals in simple markdown</li>
            <li>✔ Connect to an existing LLM or agent</li>
            <li>✔ Integrate with your CI / CD pipeline</li>
          </ul>
          <div className="flex gap-4">
            <Button render={<a href="https://docs.hebo.ai/" target="_blank" rel="noreferrer" />} className="h-10 px-5 text-medium bg-indigo-900 text-white hover:bg-indigo-800">
              Get Started
            </Button>
            <Button render={<a href="https://docs.hebo.ai/" target="_blank" rel="noreferrer" />} className="h-10 px-5 rounded-xl border-2 border-solid border-indigo-800 bg-stone-50 hover:bg-indigo-50 text-base font-semibold text-stone-900">
                Docs
            </Button>
          </div>
          <pre className="flex items-center gap-2 text-medium">
            $ bun install hebo-evals@latest
            <CopyButton
              value="npm install hebo-evals@latest"
              className="cursor-pointer text-gray-500 hover:text-gray-900"
            />
          </pre>
        </div>
      </div>

      <section className="max-w-3xl mx-auto space-y-2 text-base font-normal leading-relaxed">
        <h2 className="text-xl font-semibold">
          Hebo Evals: Markdown for Evals, a human-first format{" "}
        </h2>
        <p>
          We explored existing evaluation solutions — and while powerful, most
          felt <strong>built for developers first</strong>. But who ultimately
          owns the outcomes? The business does.
        </p>

        <p>
          But effective evals shouldn’t live in code alone. They need to be{" "}
          <strong>written, reviewed, and iterated on by business teams</strong>{" "}
          — the people who actually define what “good” looks like.
        </p>

        <p>
          And honestly: who enjoys writing evals full of{" "}
          <strong>curly braces</strong>, JSON, and DSLs?
        </p>

        <p>
          Agents already speak Markdown. Humans do too. Markdown is not only a
          natural format for agents — it’s{" "}
          <strong>easier for people to read, write, and reason about</strong>.
        </p>

        <p>
          On top of that, Markdown has a rich ecosystem of tooling, enabling{" "}
          <strong>Notion-like editing experiences</strong> that lower the
          barrier even further.
        </p>

        <p>
          That’s why we introduced <strong>.MDE</strong> —{" "}
          <em>Markdown for Evals</em>. A simple, human-first format for defining
          evaluation logic that both business and technical teams can understand
          and evolve together.
        </p>

        <p>
          This is <strong>v0.1</strong>, and we’re actively looking for early
          feedback. Give it a try — and let us know what you think via X (
          <a
            href="https://x.com/heboai"
            target="_blank"
            rel="noreferrer"
            aria-label="Hebo on X"
            className="underline"
          >
            @heboai
          </a>
          ) or on{" "}
          <a
            href="https://discord.com/invite/cCJtXZRU5p"
            target="_blank"
            rel="noreferrer"
            aria-label="Join the Hebo Discord"
            className="underline"
          >
            Discord
          </a>
          .
        </p>
      </section>
    </>
  );
}
