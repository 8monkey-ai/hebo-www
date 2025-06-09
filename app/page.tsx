import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, MessageCircleMore, Cloudy, UsersRound } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl m-full mx-auto flex flex-col gap-5 p-5">

      <div id="nav" className="flex justify-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1">
            <a href="/" target="_blank">
              <div id="logo" className="flex gap-1 items-center text-xl/5 md:text-2xl/10 font-semibold">
                <Image src="/hebo.png" alt="Hebo AI" width={20} height={20} className="w-5 md:w-8 h:6 md:h-8"/>
                Hebo
              </div>
            </a>
            <a href="https://www.linkedin.com/company/heboai/jobs/" target="_blank">
              <Badge className="h-5 text-xs rounded-lg bg-indigo-500">Hiring</Badge>
            </a>
          </div>
          <div className="flex items-center gap-8">
            <a href="http://github.com/heboai/hebo/" target="_blank" className="hidden md:block">
              <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                <Image src="/github.png" alt="Hebo AI" width={20} height={20} />
                Source
              </div>
            </a>
            <a href="https://discord.gg/cCJtXZRU5p" target="_blank" className="hidden md:block">
              <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                <Image src="/discord.png" alt="Hebo AI" width={20} height={20} />
                Community
            </div>
            </a>
            <Button asChild className=' h-8 py-0 text-sm font-semibold text-stone-900 rounded-2xl bg-stone-100 hover:bg-stone-200 border-solid border-2 border-indigo-800'>
              <a href="https://cloud.hebo.ai" target="_blank">
                Cloud
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div id="hero" className="flex flex-col w-full mx-auto gap-15 md:p-5">

        <div className="flex flex-col md:flex-row w-full justify-between md:gap-10">
          <div id="hero-content" className="flex flex-col md:max-w-xl gap-4 z-1">
            <div id="title" className="text-3xl/10 md:text-5xl/15 font-semibold overflow-hidden text-ellipsis">
              Build <span className="underline">Conversational Agents</span> with TypeScript
            </div>
            <div id="description" className="text-base/6">
              Hebo is a toolchain that streamlines the development & operations of conversational agents. Key primitives for <span className="font-semibold">RAG, Tools & Memory</span> are provided out-of-the-box. It enables tech and business teams to collaborate closely on the actual <span className="font-semibold">conversation content and quality</span>. Observability is built-in to quickly iterate on the agent's capabilities.
            </div>
            <div id="ctas" className="flex flex-col md:flex-row items-start md:items-center gap-3">
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

          <div className="flex justify-end z-0">
              <Image src="/hero.png" alt="Hero Image" width={400} height={400} priority={true} className="relative md:static max-h-[300px] md:max-h-[400px] max-w-[300px] md:max-w-[400px] -mt-25 md:mt-0"/>
          </div>
        </div>
      
        <div id='hebo-evals' className="flex flex-row md:max-w-5xl w-full mx-auto gap-2 p-4 border-solid border-2 rounded-xl border-indigo-800 bg-stone-100">
          <Image src="/hebo-evals.png" alt="Hero Image" width={200} height={200} className="hidden md:block w-[175px] h-[175px] -ml-13 -mt-11"/>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 text-2xl font-semibold">
              <Badge className="text-sm rounded-lg bg-green-600 text-white">COMING SOON</Badge> Introducing Hebo Evals
            </div>
            <ul className="list-disc mx-5">
              <li>Write sample conversations using <span className="font-semibold">simple Markdown</span></li>
              <li>Test against your system <span className="font-semibold">prompts</span>, (fine-tuned) <span className="font-semibold">LLMs</span> or custom <span className="font-semibold">Agents</span></li>
              <li>Seamlessly integrate into your existing <span className="font-semibold">CI / CD pipelines</span></li>
            </ul>
          </div>
        </div>

        <div id="compatibility" className="flex flex-col md:flex-row max-w-4xl mx-auto md:items-end gap-8 md:p-5">
          <div className="flex flex-col max-w-sm md:-mx-5 items-start gap-3 px-2">
            <div className="text-2xl/8 font-semibold ">Hebo seamlessly integrates with your existing choices</div>
            <div className="flex items-center gap-1"><Brain size={16} /> Choose any state-of-the-art <span className="font-semibold">LLM</span></div>
            <div className="flex items-center gap-1"><Code size={16} /> Wrap into your favorite <span className="font-semibold">Framework</span></div>
            <div className="flex items-center gap-1"><MessageCircleMore size={16} /> Connect to all common <span className="font-semibold">Messengers</span></div>
            <div className="flex items-center gap-1"><UsersRound size={16} /> Route through existing <span className="font-semibold">Team Inbox</span></div>
            <div className="flex items-center gap-1"><Cloudy size={16} /> Host on any leading <span className="font-semibold">Cloud Provider</span></div>
          </div>

          <div className="grid grid-flow-col grid-rows-6 md:grid-rows-4 gap-x-0 md:gap-x-12 gap-y-4 md:gap-y-6">
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


        <div id='infinite-monkey-ai' className="flex flex-col md:flex-row md:max-w-6xl md:mx-auto gap-4 rounded-xl md:bg-gradient-to-bl md:from-yello-100 md:to-zinc-50">
          <Image src="/banner-infinite-monkey-ai.png" alt="Infinite Monkey AI" width={400} height={265} className="hidden md:block max-w-[400px] max-h-[265px]"/>
          <div className="flex flex-col gap-3 md:p-10">
            <div className="text-4xl font-semibold">Can we help you?</div>
            <div className="text-medium">The team at Infinite Monkey AI has decades of experience in building AI agents. We’d love to talk to you and help you unlock the full power of AI to scale and optimize your business.</div>
            <Button asChild className=" h-12 text-medium text-white bg-indigo-900 hover:bg-indigo-800">
              <a href="https://tsgip706sfr0.sg.larksuite.com/scheduler/e9f3bb6edd303246" target="_blank">
                Talk to a Human
              </a>
              </Button>
          </div>
        </div>
      </div>
        
      <footer className="flex flex-wrap justify-center gap-y-2 p-4 text-sm">
        <span className="flex whitespace-nowrap">
          <Image src="/hebo.png" alt="Hebo AI" width={18} height={18} />&nbsp;
          <span className="font-semibold">hebo.ai</span>&nbsp;is designed, built and backed by&nbsp;
        </span>
        <span className="flex whitespace-nowrap">
          <Image src="/infinite-monkey-ai.png" alt="Hebo AI" width={18} height={18} />&nbsp;
          <span className="font-semibold">Infinite Monkey AI Sdn Bhd</span>&nbsp;(202501003121)
        </span>
      </footer>

    </div>
  );
}
