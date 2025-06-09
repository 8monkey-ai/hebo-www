import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, MessageCircleMore, Cloudy, UsersRound } from "lucide-react";

export default function Home() {
  return (
  
      <div id="main" className="flex flex-col w-full mx-auto gap-15 sm:p-5">

        <div id="hero" className="w-full sm:gap-10 pb-50 sm:pb-15 bg-[url('/hero.png')] bg-no-repeat bg-size-[auto_300px] sm:bg-size-[auto_400px] bg-bottom-right sm:bg-top-right">
          <div id="hero-content" className="flex flex-col sm:max-w-xl gap-4">
            <div id="title" className="text-3xl/10 sm:text-5xl/15 font-semibold overflow-hidden text-ellipsis">
              Build <span className="underline">Conversational Agents</span> with TypeScript
            </div>
            <div id="description" className="flex flex-col gap-2 text-base/6">
              <p>Hebo is the fastest way to build and scale <span className="underline decoration-dotted">high-quality</span> conversational agents. </p>
              <p>A stack that includes primitives for <span className="font-semibold">RAG, Tools & Memory</span>, enabling fine-grained control over conversation content & quality. </p>
              <p>A toolchain for <span className="font-semibold">evaluations & observability</span> that allows tech and business teams iterate quickly on the agent's capabilities.</p>
            </div>
            <div id="ctas" className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button asChild className="h-12 px-3 text-base font-semibold text-stone-900 rounded-xl bg-stone-100 hover:bg-stone-200 border-solid border-2 border-indigo-800">
                <a href="https://discord.gg/cCJtXZRU5p" target="_blank">
                  <Image src="/discord-purple.png" alt="Hebo AI" width={32} height={32} />
                  Get Early Access
                </a>
              </Button>
              <a href="http://github.com/heboai/hebo/" target="_blank" className="text-base font-medium hover:underline">
                View on Github &gt;
              </a>
            </div>
          </div>
        </div>
      
        <div id='hebo-evals' className="flex flex-row sm:max-w-5xl w-full mx-auto gap-2 p-4 border-solid border-2 rounded-xl border-indigo-800 bg-stone-100">
          <Image src="/hebo-evals.png" alt="Hebo Evals" width={200} height={200} className="hidden md:block w-[175px] h-[175px] -ml-13 -mt-11"/>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-2xl font-semibold">
              <Badge className="text-sm rounded-lg bg-green-600 text-white">COMING SOON</Badge>
              <div className="">Introducing Hebo Evals</div>
            </div>
            <ul className="list-disc mx-5">
              <li>Write sample conversations using <span className="font-semibold">simple Markdown</span></li>
              <li>Test against your system <span className="font-semibold">prompts</span>, (fine-tuned) <span className="font-semibold">LLMs</span> or custom <span className="font-semibold">Agents</span></li>
              <li>Seamlessly integrate into your existing <span className="font-semibold">CI / CD pipelines</span></li>
            </ul>
          </div>
        </div>

        <div id="compatibility" className="flex flex-col sm:flex-row max-w-4xl mx-auto sm:items-end gap-8 sm:p-5">
          <div className="flex flex-col max-w-sm sm:-mx-5 items-start gap-3 px-2">
            <div className="text-2xl/8 font-semibold ">Hebo seamlessly integrates with your existing choices</div>
            <div className="flex items-center gap-1"><Brain size={16} /> Choose any state-of-the-art <span className="font-semibold">LLM</span></div>
            <div className="flex items-center gap-1"><Code size={16} /> Wrap into your favorite <span className="font-semibold">Framework</span></div>
            <div className="flex items-center gap-1"><MessageCircleMore size={16} /> Connect to all common <span className="font-semibold">Messengers</span></div>
            <div className="flex items-center gap-1"><UsersRound size={16} /> Route through existing <span className="font-semibold">Team Inbox</span></div>
            <div className="flex items-center gap-1"><Cloudy size={16} /> Host on any leading <span className="font-semibold">Cloud Provider</span></div>
          </div>
          <div className="grid grid-flow-col grid-rows-6 sm:grid-rows-4 gap-x-0  sm:gap-x-2 lg:gap-x-12 gap-y-4 lg:gap-y-6">
            <Image src="/icon-antrophic-claude.png" alt="Antrophic Claude" width={48} height={48} />
            <Image src="/icon-google-gemini.png" alt="Google Gemini" width={48} height={48} />
            <Image src="/icon-openai-chatgpt.png" alt="OpenAI ChatGPT" width={48} height={48} />
            <Image src="/icon-meta-llama.png" alt="Meta Llama" width={48} height={48} />
            <Image src="/icon-alibaba-qwen.png" alt="Alibaba Qwen" width={48} height={48} />
            <Image src="/icon-deepseek.png" alt="Deepseek" width={48} height={48} />
            <Image src="/icon-nextjs.png" alt="NextJS" width={48} height={48} />
            <Image src="/icon-nuxtjs.png" alt="NuxtJS" width={48} height={48} />
            <Image src="/icon-astro.png" alt="Astro" width={48} height={48} />
            <Image src="/icon-tanstack.png" alt="TanStack" width={48} height={48} />
            <Image src="/icon-hono.png" alt="Hono" width={48} height={48} />
            <Image src="/icon-nestjs.png" alt="NestJS" width={48} height={48} />
            <Image src="/icon-facebook-messenger.png" alt="Facebook Messenger" width={48} height={48} />
            <Image src="/icon-whatsapp.png" alt="WhatsApp" width={48} height={48} />
            <Image src="/icon-instagram.png" alt="Instagram" width={48} height={48} />
            <Image src="/icon-tiktok.png" alt="TikTok" width={48} height={48} />
            <Image src="/icon-telegram.png" alt="Telegram" width={48} height={48} />
            <Image src="/icon-viber.png" alt="Viber" width={48} height={48} />
            <Image src="/icon-amazon-webservices.png" alt="Amazon Web Services" width={48} height={48} />
            <Image src="/icon-google-cloud-platform.png" alt="Google Cloud Platform" width={48} height={48} />
            <Image src="/icon-vercel.png" alt="Vercel" width={48} height={48} />
            <Image src="/icon-microsoft-azure.png" alt="Microsoft Azure" width={48} height={48} />
            <Image src="/icon-flyio.png" alt="FlyIO" width={48} height={48} />
            <Image src="/icon-railway.png" alt="Railway" width={48} height={48} />
          </div>
        </div>

      </div>

  );
}
