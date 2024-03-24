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
        className={`${GeistSans.variable} ${GeistMono.variable} relative font-sans bg-whiteout selection:text-white selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <nav className="fixed top-0 px-12 p-6 flex w-full items-center justify-between z-50">
          <svg
            className="absolute right-0 top-0 -scale-x-100 z-50 "
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-black fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
            />
          </svg>

          <svg
            className="absolute left-0 top-0 z-50"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-black fill-blackout"
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
          <Link
            href=""
            className="underline underline-offset-[3px] decoration-[1.5px] decoration-zinc-400 mr-10 font-medium"
          >
            contact
          </Link>
        </nav>
        {children}
        <div className="fixed bottom-0 bg-red-200 w-full z-50">
          <svg
            className="absolute bottom-0 right-0 rotate-180 z-50"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-black fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
            />
          </svg>

          <svg
            className="absolute left-0 bottom-0 -scale-x-100 rotate-180 z-50"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="dark:fill-black fill-blackout"
              d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
            />
          </svg>
        </div>
        <footer>
          <div className="min-h-[50vh] pt-[200px] flex dark:bg-zinc-800 justify-center w-full flex-col items-center">
            <div className="bg-blackout p-20 pb-10 rounded-2xl mb-20 text-whiteout grid grid-cols-4">
              <div className="w-[200px] flex flex-col">
                <h2 className="text-lg">Socials</h2>
                <ul className="opacity-75 font-normal gap-2 flex flex-col underline mt-2">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://linkedin.com/in/philipp-parzer"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/philipp_parzer"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://youtube.com/philparzer"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://instagram.com/philipp_parzer"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://instagram.com/philipp_parzer"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col">
                <h2 className="text-lg">Links</h2>
                <ul className="opacity-75 font-normal gap-2 flex flex-col underline mt-2">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://linkedin.com/in/philipp-parzer"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/philipp_parzer"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://youtube.com/philparzer"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://instagram.com/philipp_parzer"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col">
                <h2 className="text-lg">Pages</h2>
                <ul className="opacity-75 font-normal gap-2 flex flex-col underline mt-2">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://linkedin.com/in/philipp-parzer"
                    >
                      Imprint
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/philipp_parzer"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col">
                <h2 className="text-lg">Contact</h2>
                <div className="opacity-75">
                  <p className="mt-2">+436605439322</p>
                  <p>parzerphilipp@gmail.com</p>
                  <p className="mt-2">Robertgasse 1</p>
                  <p>1020, Vienna, Austria</p>
                </div>
              </div>
              <div className="col-span-4 mt-20">
                <div>todo dark mode and language</div>
              </div>
              
              <div className="col-span-4 mt-4">
                <p>
                  this site is{" "}
                  <Link
                    className="underline decoration-2"
                    href="https://github.com"
                  >
                    open source
                  </Link>
                </p>
                <p>
                  if you have questions, or want something similar,{" "}
                  <Link
                    href="mailto:hi@adlerlagune.com"
                    className="underline decoration-2"
                  >
                    reach out
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
