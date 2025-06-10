import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";

export const metadata = {
  title: "Hebo AI - Evaluate Prompts / LLMs / Agents",
  description:
    "✔ Use simple markdown to write your evals ✔ Connect to any existing LLM or agent  ✔ Integrate with your existing CI / CD pipeline",
};

export default function Home() {
  return (
    <div id="main" className="mx-auto flex w-full flex-col gap-15 sm:p-5">
      <div
        id="hero"
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 bg-[url('/hero-evals.png')] bg-size-[auto_145px] bg-[right_calc(100%+50px)] bg-no-repeat sm:flex-row sm:bg-size-[auto_290px] sm:bg-bottom-right"
      >
        <figure
          id="conversation.md"
          className="w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl sm:max-w-xs"
        >
          <figcaption className="flex items-center justify-center text-sm font-medium text-gray-500">
            conversation.md
          </figcaption>
          <pre className="flex flex-col gap-4 p-4 text-xs text-wrap">
            <p>
              <span className="font-semibold text-purple-800">System:</span> You
              are a helpful and concise virtual assistant for an e-commerce
              platform. Keep answers short and friendly.
            </p>

            <p>
              <span className="font-semibold text-blue-800">User:</span> Hi! Can
              you help me track my order?
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
              Thanks! Your order is on the way and should arrive by tomorrow
              evening.
            </p>
          </pre>
        </figure>

        <div id="message" className="flex flex-col gap-4">
          <div className="text-4xl font-light">Hebo Evals</div>
          <div className="max-w-md text-5xl font-medium">
            Evaluate{" "}
            <span className="underline decoration-dotted">Prompts</span> /{" "}
            <span className="underline decoration-dotted">LLMs</span> /{" "}
            <span className="underline decoration-dotted">Agents</span>
          </div>
          <ul className="text-lg/7">
            <li>✔ Write evals in simple markdown</li>
            <li>✔ Connect to an existing LLM or agent</li>
            <li>✔ Integrate with your CI / CD pipeline</li>
          </ul>
          <div className="flex gap-4">
            <Button
              asChild
              className="text-medium h-12 bg-indigo-900 text-white hover:bg-indigo-800"
            >
              <a href="https://docs.hebo.ai/">Get Started</a>
            </Button>
            <Button
              asChild
              className="h-12 rounded-xl border-2 border-solid border-indigo-800 bg-stone-100 text-base font-semibold text-stone-900 hover:bg-stone-200"
            >
              <a href="https://docs.hebo.ai/">Docs</a>
            </Button>
          </div>
          <pre className="text-medium flex items-center gap-2">
            $ npm install hebo-evals@latest
            <Copy size={16} className="text-gray-500 hover:text-gray-900" />
          </pre>
        </div>
      </div>

      <div
        id="hebo-cloud"
        className="mx-auto flex w-full flex-row gap-2 rounded-xl border-2 border-solid border-gray-300 bg-stone-100 p-4 sm:max-w-5xl sm:bg-[url('/bg-hebo-cloud.png')] sm:bg-size-[auto_120px] sm:bg-[calc(100%-30px)_center] sm:bg-no-repeat"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2 text-2xl font-semibold md:flex-row">
            <Badge className="rounded-lg bg-green-600 text-sm text-white">
              COMING SOON
            </Badge>
            <div className="">Hebo Cloud</div>
          </div>
          <ul className="mx-5 list-disc space-y-1">
            <li>
              Get access to all state-of-the-art LLMs in a single place with
              highest performance
            </li>
            <li>
              Execute long-running evals asynchronously with detailed
              observability insights
            </li>
            <li>
              Co-create evaluations seamlessly between business and tech teams
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
