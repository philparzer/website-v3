import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Philipp Parzer",
  description: "design engineer, entrepreneur, consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} relative font-sans bg-whiteout selection:bg-pink-400 dark:bg-blackout text-blackout dark:text-whiteout`}
      >
        <nav className="fixed top-0 px-12 p-6 flex w-full items-center justify-between ">
          <svg
            className="absolute right-0 top-0 -scale-x-100 "
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:hidden fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
              
            />
          </svg>

          <svg
            className="absolute left-0 top-0 "
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="dark:hidden fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
              
            />
          </svg>
          <Link href="/" className="relative w-[64px] h-[64px]">
            <Image
              src="/logo-anim-light.gif"
              unoptimized
              className="dark:hidden"
              fill
              alt="spinning head animation"
            />
            <Image
              src="/logo-anim-dark.gif"
              unoptimized
              className="hidden dark:block"
              fill
              alt="spinning head animation"
            />
          </Link>
          <Link href="" className="underline underline-offset-[3px] decoration-[1.5px] decoration-zinc-400 mr-10 font-medium">
            contact
          </Link>
        </nav>
        {children}
        <div className="fixed bottom-0 bg-red-200 w-full">
        <svg
            className="absolute bottom-0 right-0 rotate-180 "
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:hidden fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
              
            />
          </svg>

          <svg
            className="absolute left-0 bottom-0 -scale-x-100 rotate-180"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="dark:hidden fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
              
            />
          </svg>
          </div>
      </body>
    </html>
  );
}
