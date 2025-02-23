"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContentBox from "./content-box";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import useFaviconAnimation from "@/lib/use-favicon-animation";
import { ExternalLink } from "lucide-react";

interface ScrollContainerProps {}

const WORDS = ["aware", "cutting-edge", "proficient", "daring"];

const ScrollContainer = ({}: ScrollContainerProps) => {
  useFaviconAnimation();
  const [activeContentBoxIndex, setActiveContentBoxIndex] = useState(0);
  const debouncedActiveContentIndex = useDebounce(activeContentBoxIndex, 300);

  return (
    <div className="relative w-full md:mb-[200px] max-w-screen flex flex-col items-center">
      <div className="relative">
        <div className="sticky z-20 top-[33vh] left-0 pl-4 md:pl-0 translate-x-0 lg:translate-x-[100px] md:translate-x-[130px] max-w-[792px] w-full flex justify-center">
          <div className="flex gap-1.5 md:gap-4 relative md:-translate-x-[230px] w-full text-[22px] md:text-[32px] font-semibold items-baseline left-0 ">
            <div className="flex md:gap-4 gap-1.5 items-baseline">
              Philipp{" "}
              <span className="opacity-50 text-lg md:text-[22px]">is</span>{" "}
            </div>
            <div className="relative leading-normal h-[22px] md:h-[33px]">
              <div>
                <div className="absolute h-full flex whitespace-nowrap top-0 left-0 ">
                  <div>
                    <AnimatePresence initial={false}>
                      {WORDS.map((word, i) => {
                        if (i === debouncedActiveContentIndex)
                          return (
                            <motion.div
                              className="absolute left-0 top-0  rounded-lg"
                              key={word + i}
                              initial={{
                                x: -20,
                                y: -12,
                                rotate: 0,
                                opacity: 0,
                                scale: 0.95,
                              }}
                              animate={{
                                x: [-10, 6, 0],
                                y: [-6, 4, 0],
                                rotate: 0,
                                scale: 1,
                                opacity: [0, 1, 1, 1, 1],
                                transition: {
                                  ease: "easeInOut",
                                  delay: 0.24,
                                  duration: 0.2,
                                },
                              }}
                              exit={{
                                x: 20,
                                y: -20,
                                rotate: -4,
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                  ease: "easeInOut",
                                  duration: 0.2,
                                },
                              }}
                            >
                              <div className="absolute origin-center h-full z-0 backdrop-blur-[2px] w-[110%] rounded-full"></div>
                              <div className="text-[20px] md:text-[30px] relative z-10">
                                {word}
                              </div>
                            </motion.div>
                          );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col justify-between ">
          <section className="max-w-[792px] w-full mt-[35vh] relative">
            <div className="h-full right-0 top-0 absolute w-[12%] bg-gradient-to-l  dark:from-zinc-900 from-whiteout to-transparent z-20" />
            <ul>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={0}
                riveSource="/rive/aware.riv"
                riveStateMachine="1"
                keywords={["leading teams", "comms", "consulting"]}
              >
                <p className="text-lg  leading-normal md:text-[22px] max-w-[420px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  I can deal with{" "}
                  <span className="dark:text-zinc-100 text-blackout">
                    hard deadlines
                  </span>{" "}
                  and even harder{" "}
                  <span className="dark:text-zinc-100 text-blackout">
                    business requirements
                  </span>
                </p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={1}
                riveSource="/rive/cutting-edge.riv"
                riveStateMachine="2"
                keywords={["rewrite", "rebrand", "improve"]}
              >
                <p className="text-lg  leading-normal md:text-[22px] max-w-[450px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  <span className="dark:text-zinc-100 text-blackout">
                    I love shiny new tech.
                  </span>{" "}
                  But I also know when it&lsquo;s better to go with
                  battle-tested solutions instead.
                </p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={2}
                riveSource="/rive/proficient.riv"
                riveStateMachine="3"
                keywords={["engineering", "design"]}
              >
                <div className="relative">
                  <p className="text-lg  leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                    I build products solo, from 0 to 1.{" "}
                    <span className="dark:text-zinc-100 text-blackout whitespace-nowrap">
                      Hands-on experience
                    </span>{" "}
                    is an understatement. <br></br>I design, code, and carry
                    product.
                  </p>
                </div>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={3}
                riveSource="/rive/daring.riv"
                riveStateMachine="4"
                keywords={["entrepreneur", "agency"]}
              >
                <p className="text-lg  leading-normal md:text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  I&lsquo;m the co-founder of{" "}
                  <span className="dark:text-zinc-100 text-blackout whitespace-nowrap">
                    <Link
                      href="https://adlerlagune.com"
                      target="_blank"
                      className="underline inline-flex dark:text-whiteout/100 gap-1 items-center font-semibold text-blackout/100"
                    >
                      adlerlagune
                      <ExternalLink strokeWidth={3} width={20} />
                    </Link>
                  </span>{" "}
                  a digital agency that also dabbles in original products
                </p>
              </ContentBox>
            </ul>
          </section>
        </main>
      </div>
      <div className="">
        <div className="bg-gradient-to-t w-full h-40 from-whiteout dark:from-zinc-900 dark:via-zinc-900 via-whiteout to-transparent absolute left-0 bottom-0 z-30" />
      </div>
    </div>
  );
};

export default ScrollContainer;