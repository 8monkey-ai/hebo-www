import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="p-4 max-w-6xl min-h-screen mx-auto flex flex-col gap-4">

      <div id="nav" className="flex justify-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 items-center">
            <a href="/" target="_blank">
              <div id="logo" className="flex gap-1 font-semibold text-xl/5 md:text-2xl/10 items-center">
                <Image src="/hebo.png" alt="Hebo AI" width={20} height={20} className="w-5 md:w-8 h:6 md:h-8"/>
                Hebo
              </div>
            </a>
            <a href="https://www.linkedin.com/company/heboai/jobs/" target="_blank">
              <Badge className="text-xs h-5 rounded-lg bg-indigo-500">Hiring</Badge>
            </a>
          </div>
          <div className="flex gap-8 items-center">
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
            <Button asChild className='font-semibold text-sm h-8 py-0 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-900 border-indigo-800 border-2'>
              <a href="https://cloud.hebo.ai" target="_blank">
                Cloud
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div id="hero" className="flex w-full mx-auto gap-4">
        <div className="flex flex-col md:flex-row justify-between w-full md:p-5 md:gap-10 ">
          <div id="hero-content" className="flex flex-col gap-4 md:max-w-xl z-1">
            <div id="title" className="font-semibold text-3xl/10 md:text-5xl/15">
              Build <span className="underline">Conversational Agents</span> with TypeScript
            </div>
            <div id="description" className="text-base">
              Hebo is a toolchain that streamlines the development & operations of conversational agents. Key primitives for <span className="font-semibold">RAG, Tools & Memory</span> are provided out-of-the-box. It focuses tech and business teams to collaborate closely on the actual <span className="font-semibold">conversation content and quality</span>. Not only for the first version, but more importantly the many subsequent iteration.
            </div>
            <div id="ctas" className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <Button asChild className="text-base font-semibold px-3 h-12 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border-indigo-800 border-2">
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
              <Image src="/hero.png" alt="Hero Image" width={400} height={400} priority={true} className="max-h-[300px] md:max-h-[400px] max-w-[300px] md:max-w-[400px] object-contain relative md:static -mt-25 md:mt-0"/>
          </div>
        </div>
      </div>

      <footer className="flex flex-wrap justify-center text-sm p-4 gap-y-2">
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
