import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: 'Hebo AI - Evaluate Prompts / LLMs / Agents',
  description: '✔ Use simple markdown to write your evals ✔ Connect to any existing LLM or agent  ✔ Integrate with your existing CI / CD pipeline',
};

export default function Home() {
  return (
    <div id="main" className="flex flex-col w-full mx-auto gap-15 sm:p-5">

      <div id='hero' className="flex flex-col sm:flex-row max-w-5xl mx-auto w-full gap-8 bg-[url('/hero-evals.png')] bg-no-repeat bg-size-[auto_145px] sm:bg-size-[auto_290px] bg-bottom-right">
        
        <figure id='conversation.md' className="bg-white w-full max-w-xs h-90 rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-2">
          <figcaption className="flex justify-center items-center text-sm font-medium text-gray-500">conversation.md</figcaption>
          <pre className="p-4 flex flex-col text-xs text-wrap gap-4">
            <p>System: You are a helpful and concise virtual assistant for an e-commerce platform. Keep answers short and friendly.</p>

            <p>User: Hi! Can you help me track my order?</p>

            <p>Assistant: Of course! Could you share your order ID, please?</p>

            <p>User: Sure, it&apos;s #8927341.</p>

            <p>Tool: Order Mgmt(#8927341)</p>

            <p>Assistant: Thanks! Your order is on the way and should arrive by tomorrow evening.</p>
          </pre>
        </figure>

        <div id='message' className="flex flex-col gap-4">
          <div className="text-4xl font-light">Hebo Evals</div>
          <div className="max-w-lg text-5xl font-medium">Evalute <span className="underline decoration-dotted">Prompts</span> / <span className="underline decoration-dotted">LLMs</span> / <span className="underline decoration-dotted">Agents</span></div>
          <ul className="text-lg/7">
            <li>✔ Use simple markdown to write your evals</li>
            <li>✔ Connect to any existing LLM or agent</li>
            <li>✔ Integrate with your existing CI / CD pipeline</li>
          </ul>
          <div className="flex gap-4">
            <Button asChild className="h-12 text-medium text-white bg-indigo-900 hover:bg-indigo-800">
              <a href="" target="_blank">
                Get Started
              </a>
            </Button>
            <Button asChild className="h-12 text-base font-semibold text-stone-900 rounded-xl bg-stone-100 hover:bg-stone-200 border-solid border-2 border-indigo-800">
              <a href="" target="_blank">
                Docs
              </a>
            </Button>
          </div>
          <pre className="text-medium">$ npx install hebo-evals@latest</pre>
        </div>
      </div>

      <div id='hebo-cloud' className="flex flex-row sm:max-w-5xl w-full mx-auto gap-2 p-4 border-solid border-2 rounded-xl border-gray-300 bg-stone-100 sm:bg-[url('/bg-hebo-cloud.png')] sm:bg-no-repeat sm:bg-size-[auto_120px] sm:bg-right">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-2xl font-semibold">
              <Badge className="text-sm rounded-lg bg-green-600 text-white">COMING SOON</Badge>
              <div className="">Hebo Cloud</div>
            </div>
            <ul className="list-disc mx-5">
              <li>Get access to all state-of-the-art LLMs in a single place with highest performance</li>
              <li>Execute long-running evals asynchronously with detailed observability insights</li>
              <li>Co-create evaluations seamlessly between business and tech teams</li>
            </ul>
          </div>
        </div>

    </div>
  );
}
