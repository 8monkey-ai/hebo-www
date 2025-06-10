import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code,
  MessageCircleMore,
  Cloudy,
  UsersRound,
} from "lucide-react";

export default function Home() {
  return (
    <div id="main" className="mx-auto flex w-full flex-col gap-15 sm:p-5">
      <div
        id="hero"
        className="w-full bg-[url('/hero.png')] bg-size-[auto_300px] bg-bottom-right bg-no-repeat pb-50 sm:gap-10 sm:bg-size-[auto_400px] sm:bg-top-right sm:pb-15"
      >
        <div id="hero-content" className="flex flex-col gap-4 sm:max-w-xl">
          <div
            id="title"
            className="overflow-hidden text-3xl/10 font-semibold text-ellipsis sm:text-5xl/15"
          >
            Build <span className="underline">Conversational Agents</span> with
            TypeScript
          </div>
          <div id="description" className="flex flex-col gap-2 text-base/6">
            <p>
              Hebo is the fastest way to build and scale{" "}
              <span className="underline decoration-dotted">high-quality</span>{" "}
              conversational agents.{" "}
            </p>
            <p>
              A stack that includes primitives for{" "}
              <span className="font-semibold">RAG, Tools & Memory</span>,
              enabling fine-grained control over conversation content &
              quality.{" "}
            </p>
            <p>
              A toolchain for{" "}
              <span className="font-semibold">evaluations & observability</span>{" "}
              that allows tech and business teams iterate quickly on the
              agent&apos;s capabilities.
            </p>
          </div>
          <div
            id="ctas"
            className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              className="h-12 rounded-xl border-2 border-solid border-indigo-800 bg-stone-100 px-3 text-base font-semibold text-stone-900 hover:bg-stone-200"
            >
              <a href="https://discord.gg/cCJtXZRU5p" target="_blank">
                <Image
                  src="/discord-purple.png"
                  alt="Hebo AI"
                  width={32}
                  height={32}
                />
                Get Early Access
              </a>
            </Button>
            <a
              href="http://github.com/heboai/hebo/"
              target="_blank"
              className="text-base font-medium hover:underline"
            >
              View on Github &gt;
            </a>
          </div>
        </div>
      </div>

      <div
        id="hebo-evals"
        className="mx-auto flex w-full flex-row gap-2 rounded-xl border-2 border-solid border-indigo-800 bg-stone-100 p-4 sm:max-w-5xl"
      >
        <Image
          src="/hebo-evals.png"
          alt="Hebo Evals"
          width={200}
          height={200}
          className="-mt-11 -ml-13 hidden h-[175px] w-[175px] md:block"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2 text-2xl font-semibold md:flex-row">
            <Badge className="rounded-lg bg-green-600 text-sm text-white">
              COMING SOON
            </Badge>
            <div className="">Introducing Hebo Evals</div>
          </div>
          <ul className="mx-5 list-disc">
            <li>
              Write sample conversations using{" "}
              <span className="font-semibold">simple Markdown</span>
            </li>
            <li>
              Test against your system{" "}
              <span className="font-semibold">prompts</span>, (fine-tuned){" "}
              <span className="font-semibold">LLMs</span> or custom{" "}
              <span className="font-semibold">Agents</span>
            </li>
            <li>
              Seamlessly integrate into your existing{" "}
              <span className="font-semibold">CI / CD pipelines</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="compatibility"
        className="mx-auto flex max-w-4xl flex-col gap-8 sm:flex-row sm:items-end sm:p-5"
      >
        <div className="flex max-w-sm flex-col items-start gap-3 px-2 sm:-mx-5">
          <div className="text-2xl/8 font-semibold">
            Hebo seamlessly integrates with your existing choices
          </div>
          <div className="flex items-center gap-1">
            <Brain size={16} /> Choose any state-of-the-art{" "}
            <span className="font-semibold">LLM</span>
          </div>
          <div className="flex items-center gap-1">
            <Code size={16} /> Wrap into your favorite{" "}
            <span className="font-semibold">Framework</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircleMore size={16} /> Connect to all common{" "}
            <span className="font-semibold">Messengers</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersRound size={16} /> Route through existing{" "}
            <span className="font-semibold">Team Inbox</span>
          </div>
          <div className="flex items-center gap-1">
            <Cloudy size={16} /> Host on any leading{" "}
            <span className="font-semibold">Cloud Provider</span>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-6 gap-x-0 gap-y-4 sm:grid-rows-4 sm:gap-x-2 lg:gap-x-12 lg:gap-y-6">
          <Image
            src="/icon-antrophic-claude.png"
            alt="Antrophic Claude"
            width={48}
            height={48}
          />
          <Image
            src="/icon-google-gemini.png"
            alt="Google Gemini"
            width={48}
            height={48}
          />
          <Image
            src="/icon-openai-chatgpt.png"
            alt="OpenAI ChatGPT"
            width={48}
            height={48}
          />
          <Image
            src="/icon-meta-llama.png"
            alt="Meta Llama"
            width={48}
            height={48}
          />
          <Image
            src="/icon-alibaba-qwen.png"
            alt="Alibaba Qwen"
            width={48}
            height={48}
          />
          <Image
            src="/icon-deepseek.png"
            alt="Deepseek"
            width={48}
            height={48}
          />
          <Image src="/icon-nextjs.png" alt="NextJS" width={48} height={48} />
          <Image src="/icon-nuxtjs.png" alt="NuxtJS" width={48} height={48} />
          <Image src="/icon-astro.png" alt="Astro" width={48} height={48} />
          <Image
            src="/icon-tanstack.png"
            alt="TanStack"
            width={48}
            height={48}
          />
          <Image src="/icon-hono.png" alt="Hono" width={48} height={48} />
          <Image src="/icon-nestjs.png" alt="NestJS" width={48} height={48} />
          <Image
            src="/icon-facebook-messenger.png"
            alt="Facebook Messenger"
            width={48}
            height={48}
          />
          <Image
            src="/icon-whatsapp.png"
            alt="WhatsApp"
            width={48}
            height={48}
          />
          <Image
            src="/icon-instagram.png"
            alt="Instagram"
            width={48}
            height={48}
          />
          <Image src="/icon-tiktok.png" alt="TikTok" width={48} height={48} />
          <Image
            src="/icon-telegram.png"
            alt="Telegram"
            width={48}
            height={48}
          />
          <Image src="/icon-viber.png" alt="Viber" width={48} height={48} />
          <Image
            src="/icon-amazon-webservices.png"
            alt="Amazon Web Services"
            width={48}
            height={48}
          />
          <Image
            src="/icon-google-cloud-platform.png"
            alt="Google Cloud Platform"
            width={48}
            height={48}
          />
          <Image src="/icon-vercel.png" alt="Vercel" width={48} height={48} />
          <Image
            src="/icon-microsoft-azure.png"
            alt="Microsoft Azure"
            width={48}
            height={48}
          />
          <Image src="/icon-flyio.png" alt="FlyIO" width={48} height={48} />
          <Image src="/icon-railway.png" alt="Railway" width={48} height={48} />
        </div>
      </div>
    </div>
  );
}
