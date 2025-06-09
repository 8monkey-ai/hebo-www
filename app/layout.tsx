import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Hebo is a toolchain that streamlines the development & operations of conversational agents",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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
          src={'https://www.googletagmanager.com/gtag/js?id=G-ZJJ115Z0CH'}
        />
        <Script 
          strategy="afterInteractive"
          id="google-analytics"
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJJ115Z0CH');
          `}}
        />
      </head>

      <body className={`${geistSans.className} antialiased bg-linear-153 from-[#F5F7FA] to-[#F8F9D2] from-35% overflow-x-hidden`}>

        <div className="max-w-6xl m-full mx-auto flex flex-col gap-8 p-6">

          <div id="nav" className="flex justify-center">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-top gap-1">
                <a href="/" target="_blank">
                  <div id="logo" className="flex gap-1 items-center text-xl/5 sm:text-2xl/10 font-semibold">
                    <Image src="/hebo.png" alt="Hebo AI" width={20} height={20} className="w-6 sm:w-8 h:6 sm:h-8"/>
                    Hebo
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/heboai/jobs/" target="_blank">
                  <Badge className="h-5 text-xs rounded-lg bg-indigo-500">Hiring</Badge>
                </a>
              </div>
              <div className="flex items-center gap-8">
                <a href="https://github.com/heboai/hebo/" target="_blank" className="hidden sm:block">
                  <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                    <Image src="/github.png" alt="Hebo AI" width={20} height={20} />
                    Source
                  </div>
                </a>
                <a href="https://discord.gg/cCJtXZRU5p" target="_blank" className="hidden sm:block">
                  <div className="flex items-center gap-2 text-sm font-medium hover:underline">
                    <Image src="/discord.png" alt="Hebo AI" width={20} height={20} />
                    Community
                </div>
                </a>
                <Button asChild className='h-8 py-0 text-sm font-semibold text-stone-900 rounded-2xl bg-stone-100 hover:bg-stone-200 border-solid border-2 border-indigo-800'>
                  <div>
                  <a href="https://cloud.hebo.ai" target="_blank">
                    Cloud
                  </a>
                  <Badge className="h-5 absolute -mt-8 ml-12 rotate-6 text-xs rounded-lg bg-orange-500">Beta</Badge>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {children}

          <footer className="flex flex-wrap justify-center gap-y-2 p-4 text-sm">
            <span className="flex whitespace-nowrap">
              <Image src="/hebo.png" alt="Hebo AI" width={18} height={18} />&nbsp;
              <span className="font-semibold">hebo.ai</span>&nbsp;is designed, built and backed by&nbsp;
            </span>
            <span className="flex whitespace-nowrap">
              <Image src="/infinite-monkey-ai.png" alt="Hebo AI" width={18} height={18} />&nbsp;
              <span className="font-semibold"><a href="https://8monkey.ai/" target="_blank" className="hover:underline">Infinite Monkey AI Sdn Bhd</a></span>&nbsp;(202501003121)
            </span>
          </footer>

        </div>
      
      </body>
    </html>
  );
}
