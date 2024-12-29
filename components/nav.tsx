import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import TwitchBanner from "./twitch-banner";
import { Suspense } from "react";

const Nav = () => {
  return (
    <nav className="fixed pointer-events-none top-0 md:px-12 p-4 md:p-6 flex w-screen items-center justify-between z-50">
      <svg
        className="hidden md:block absolute right-0 top-0 -scale-x-100 z-50 "
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
        className="hidden md:block absolute left-0 top-0 z-50"
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
      <Link
        href="/"
        className="relative pointer-events-auto w-[54px] h-[54px] md:w-[64px] md:h-[64px]"
      >
        <Image
          priority
          src="/logo-anim.gif"
          fill
          sizes="64px"
          alt="spinning head animation"
        />
      </Link>
      {/* <Suspense fallback={null}>
        <TwitchBanner />
      </Suspense> */}
      <Popover>
        <PopoverTrigger
          className={`pointer-events-auto underline underline-offset-[3px] opacity-100  decoration-[1.5px] decoration-blackout/50 dark:decoration-whiteout/50 md:mr-10 font-medium`}
        >
          contact
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex pointer-events-auto font-medium flex-col gap-4 font-base">
            <li>
              <Link href="mailto:parzerphilipp@gmail.com">email</Link>
            </li>
            <li>
              <Link href="tel:+436605439322">phone</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/philipp-parzer">
                linkedin
              </Link>
            </li>
            <li>
              <Link href="https://x.com/parzerp">x.com</Link>
            </li>
            <li>
              <Link href="https://twitch.com/philguin">twitch</Link>
            </li>
            <li>
              <Link href="https://bsky.app/profile/philparzer.com">bluesky</Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default Nav;
