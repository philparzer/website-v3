"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { motion } from "framer-motion";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex justify-center w-full flex-col items-center">
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
      <div className="bg-blackout p-20 pb-10 rounded-2xl mb-20 text-whiteout grid grid-cols-4">
        <div className="w-[200px] flex flex-col">
          <h2 className="text-lg font-semibold">Socials</h2>
          <ul className="font-light gap-1 flex flex-col mt-2">
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/philipp-parzer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/philipp_parzer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://youtube.com/philparzer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/philipp_parzer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
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
          <h2 className="text-lg font-semibold">Some of my work</h2>
          <ul className="font-light gap-1 flex flex-col mt-2">
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/philipp-parzer"
              >
                adlerlagune
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/philipp_parzer"
              >
                buoy
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://youtube.com/philparzer"
              >
                jotlog
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/philipp_parzer"
              >
                ampass
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex justify-end">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className=" font-light mt-2">
              <Link
                className="opacity-50 transition-opacity hover:opacity-100"
                href="mailto:parzerphilipp@gmail.com"
              >
                parzerphilipp@gmail.com
              </Link>
              <p>
                <Link
                  className="opacity-50 transition-opacity hover:opacity-100"
                  href="tel:+436605439322"
                >
                  +436605439322
                </Link>
              </p>
              <Link
                rel="noopener noreferrer"
                className="opacity-50 transition-opacity hover:opacity-100"
                target="_blank"
                href="https://www.google.com/maps/dir/48.218112,16.3971072/"
              >
                <p className="mt-2">Robertgasse 1</p>
                <p>1020, Vienna, Austria</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 mt-20">
          <h2 className="font-semibold mb-2">Theme</h2>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="col-span-4 mt-10 text-sm">
          <p className="text-whiteout/75">
            this site is{" "}
            <Link
              className="underline decoration-2 text-whiteout/100"
              href="https://github.com"
            >
              open source
            </Link>
          </p>
          <div className="flex justify-between items-baseline">
            <p className="text-whiteout/75">
              if you have questions or inquiries,{" "}
              <Link
                href="mailto:hi@adlerlagune.com"
                className="underline decoration-2 text-whiteout/100"
              >
                reach out
              </Link>
            </p>
            <p className="text-xs opacity-50">last update: SPRING2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
