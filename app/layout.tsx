import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hebo AI - Build Conversational Agents with TypeScript",
  description:
    "Hebo is the fastest way to build and scale high-quality conversational agents. ✔️ All SOTA LLMs ✔️ RAG, Tools & Memory ✔️ Evaluations & Observability",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={"https://www.googletagmanager.com/gtag/js?id=G-ZJJ115Z0CH"}
        />
        <Script
          strategy="afterInteractive"
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJJ115Z0CH');
          `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-linear-153 from-[#F5F7FA] from-35% to-[#F8F9D2]`}
      >
        <div className="m-full mx-auto flex max-w-6xl flex-col gap-8 p-6">
          <div id="nav" className="flex justify-center">
            <div className="flex w-full items-center justify-between">
              <div className="items-top flex gap-1">
                <Link href="/">
                  <div
                    id="logo"
                    className="flex items-center gap-1 text-xl/5 font-semibold sm:text-2xl/10"
                  >
                    <Image
                      src="/hebo.png"
                      alt="Hebo AI"
                      width={24}
                      height={24}
                      className="h:6 w-6 sm:h-8 sm:w-8"
                    />
                    Hebo
                  </div>
                </Link>
                <a
                  href="https://www.linkedin.com/company/heboai/jobs/"
                  target="_blank"
                >
                  <Badge className="h-5 rounded-lg bg-indigo-500 text-xs">
                    Hiring
                  </Badge>
                </a>
              </div>
              <div className="flex items-center gap-8">
                <a
                  href="https://github.com/heboai/hebo/"
                  target="_blank"
                  className="hidden sm:block"
                >
                  <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                    <Image
                      src="/github.png"
                      alt="Hebo AI"
                      width={20}
                      height={20}
                    />
                    Source
                  </div>
                </a>
                <a
                  href="https://discord.gg/cCJtXZRU5p"
                  target="_blank"
                  className="hidden sm:block"
                >
                  <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                    <Image
                      src="/discord.png"
                      alt="Hebo AI"
                      width={20}
                      height={20}
                    />
                    Community
                  </div>
                </a>
                <Button
                  asChild
                  className="h-8 rounded-2xl border-2 border-solid border-indigo-800 bg-stone-100 py-0 text-sm font-semibold text-stone-900 hover:bg-stone-200"
                >
                    <a href="https://cloud.hebo.ai" target="_blank">
                      Cloud
                    
                      <Badge className="absolute -mt-8 ml-12 h-5 rotate-6 rounded-lg bg-orange-500 text-xs">
                        Beta
                      </Badge>
                    </a>
                </Button>
              </div>
            </div>
          </div>

          {children}

          <div
            id="infinite-monkey-ai"
            className="sm:from-yello-100 flex flex-col gap-4 rounded-xl sm:mx-auto sm:max-w-5xl sm:flex-row sm:bg-gradient-to-bl sm:to-zinc-50"
          >
            <Image
              src="/banner-infinite-monkey-ai.png"
              alt="Infinite Monkey AI"
              width={400}
              height={265}
              className="hidden max-h-[265px] max-w-[400px] lg:block"
            />
            <div className="flex flex-col gap-3 sm:p-10">
              <div className="text-4xl font-semibold">Can we help you?</div>
              <div className="text-medium">
                The team at{" "}
                <a
                  href="https://8monkey.ai/"
                  target="_blank"
                  className="underline decoration-dotted"
                >
                  Infinite Monkey AI
                </a>{" "}
                has decades of experience in building AI agents. We’d love to
                talk to you and help you unlock the full power of AI to scale
                and optimize your business.
              </div>
              <Button
                asChild
                className="text-medium h-12 bg-indigo-900 text-white hover:bg-indigo-800"
              >
                <a
                  href="https://tsgip706sfr0.sg.larksuite.com/scheduler/e9f3bb6edd303246"
                  target="_blank"
                >
                  Talk to a Human
                </a>
              </Button>
            </div>
          </div>

          <footer className="flex flex-wrap justify-center gap-y-2 p-4 text-sm">
            <span className="flex whitespace-nowrap">
              <Image src="/hebo.png" alt="Hebo AI" width={18} height={18} />
              &nbsp;
              <span className="font-semibold">hebo.ai</span>&nbsp;is designed,
              built and backed by&nbsp;
            </span>
            <span className="flex whitespace-nowrap">
              <Image
                src="/infinite-monkey-ai.png"
                alt="Hebo AI"
                width={18}
                height={18}
              />
              &nbsp;
              <span className="font-semibold">
                <a
                  href="https://8monkey.ai/"
                  target="_blank"
                  className="hover:underline"
                >
                  Infinite Monkey AI Sdn Bhd
                </a>
              </span>
              &nbsp;(202501003121)
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
