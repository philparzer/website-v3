"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContentBox from "./content-box";
import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";

interface ScrollContainerProps {}

const WORDS = ["aware", "cutting-edge", "proficient", "daring", "daring"];

const ScrollContainer = ({}: ScrollContainerProps) => {
  const [activeContentBoxIndex, setActiveContentBoxIndex] = useState(0);

  const debouncedActiveContentIndex = useDebounce(activeContentBoxIndex, 120);

  return (
    <div className="relative w-full mb-[400px] flex flex-col items-center">
      <div className="relative -translate-x-[4vw]">
        <div className="sticky z-20  top-[33vh] left-0 translate-x-[100px] max-w-[792px] w-full flex justify-center">
          <div className="flex gap-4 relative -translate-x-[230px] w-full text-[32px] font-semibold items-baseline left-0 ">
            <div className="flex gap-4 items-baseline">
              Philipp <span className="opacity-50 text-[22px]">is</span>{" "}
            </div>
            <div className="relative leading-normal h-[34px]">
              <div>
                <div
                  className="absolute h-full flex whitespace-nowrap top-0 left-0 "
                >
                  <div>
                    <AnimatePresence mode="popLayout" initial={false}>
                      {WORDS.filter(
                        (_, i) => i === debouncedActiveContentIndex
                      ).map((word, i) => (
                        <motion.div
                          className="absolute left-0 top-0  rounded-lg"
                          key={word}
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
                          <div className="absolute origin-center h-full z-0 backdrop-blur-[2px] w-[120%] h-[120% rounded-full]"></div>
                          <div className="text-[30px] relative z-10">
                            {word}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="flex min-h-screen flex-col justify-between">
          <section className="max-w-[792px] w-full mt-[35vh] relative">
            <div className="h-full right-0 top-0 absolute w-[12%] bg-gradient-to-l  dark:from-zinc-900 from-whiteout to-transparent z-10" />
            <ul>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={0}
                keywords={["leading teams", "comms", "consulting"]}
              >
                <p className="text-[22px] max-w-[420px] dark:text-zinc-100/50 text-blackout/50 font-medium">
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
                keywords={["rewrite", "rebrand", "improve"]}
              >
                <p className="text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  <span className="dark:text-zinc-100 text-blackout">
                    I love shiny new tech.
                  </span>{" "}
                  But I also know when it&lsquo;s better to go with battle-tested
                  solutions instead.
                </p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={2}
                keywords={["engineering", "design"]}
              >
                <p className="text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  I build products solo, from 0 to 1.{" "}
                  <span className="dark:text-zinc-100 text-blackout whitespace-nowrap">
                    Hands-on experience
                  </span>{" "}
                  is an understatement. <br></br>I design, code, and carry product.
                </p>
              </ContentBox>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={debouncedActiveContentIndex}
                index={3}
                keywords={["entrepreneur", "agency"]}
              >
                <p className="text-[22px] max-w-[500px] dark:text-zinc-100/50 text-blackout/50 font-medium">
                  I&lsquo;m the co-founder of {" "}
                  <span className="dark:text-zinc-100 text-blackout whitespace-nowrap">
                    <Link href="https://adlerlagune.com" className="underline">adlerlagune</Link>
                  </span>{" "}
                  a digital agency that also acts a front for my side projects.
                </p>
              </ContentBox>
            </ul>
            
          </section>
        </main>
      </div>
      <div className="bg-red-200">
            <div className="bg-gradient-to-t w-screen h-40 from-whiteout via-whiteout to-transparent absolute left-0 bottom-0 z-30"/>
            </div>
    </div>
  );
};

export default ScrollContainer;
