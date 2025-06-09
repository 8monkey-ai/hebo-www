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
        {children}
      </body>
    </html>
  );
}
