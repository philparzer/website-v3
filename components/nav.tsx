"use client"

import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

const Nav = () => {

    const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  return (
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
      <Popover onOpenChange={(open) => setPopoverIsOpen(open) }>
        <PopoverTrigger className={`transition-opacity ${popoverIsOpen ? "opacity-50" : ""} underline underline-offset-[3px] decoration-[1.5px] decoration-zinc-400 mr-10 font-medium`}>
          contact
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-col gap-4 font-medium underline decoration-zinc-400 underline-offset-2">
            <li>
              <Link href="mailto:parzerphilipp@gmail.com">email</Link>
            </li>
            <li>
                <Link href="https://linkedin.com/in/philipp-parzer">linkedin</Link>
            </li>
            <li>
                <Link href="https://linkedin.com/in/philipp-parzer">phone</Link>
            </li>
            <li>
                <Link href="https://twitter.com/philipp_parzer">x.com</Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default Nav;
