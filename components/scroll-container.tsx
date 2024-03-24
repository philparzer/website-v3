"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContentBox from "./content-box";

interface ScrollContainerProps {}

const WORDS = ["aware", "cutting-edge", "proficient", "daring"];

const ScrollContainer = ({}: ScrollContainerProps) => {
  const [activeContentBoxIndex, setActiveContentBoxIndex] = useState(0);

  return (
    <div className="relative w-full mb-[400px] flex flex-col items-center">
      <div className="relative -translate-x-[10vw]">
        <div className="sticky z-20 top-[400px] left-0 translate-x-[100px] max-w-[792px] w-full flex justify-center">
          <div className="flex gap-4 relative -translate-x-[230px] w-full text-[32px]   font-semibold items-baseline left-0 ">
            <div className="flex gap-4 items-baseline">
              Philipp <span className="opacity-50 text-[22px]">is</span>{" "}
            </div>
            <div className="relative leading-normal h-[34px]">
              <div>
                <div className="absolute h-full flex whitespace-nowrap top-0 left-0 ">
                  <div>
                    <AnimatePresence mode="popLayout">
                     {WORDS.filter((_, i) => i === activeContentBoxIndex).map((word, i) => (
                        <motion.div
                          className="absolute left-0 top-0  rounded-lg"
                          key={word + i}
                         
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: [0, 1, 1, 1, 1] }}
                          
                        >
                            <div className="absolute origin-center h-full z-0 backdrop-blur-[2px] w-[120%] h-[120% rounded-full]"></div>
                          <div className="text-[30px] relative z-10">{word}</div>
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
          <section className="max-w-[792px] w-full mt-[410px] relative">
            <div className="h-full right-0 top-0 absolute w-[12%] bg-gradient-to-l  dark:from-zinc-900 from-whiteout to-transparent z-10" />
            <ul>
              <ContentBox
                setActiveIndex={setActiveContentBoxIndex}
                activeIndex={activeContentBoxIndex}
                index={0}
                keywords={["leading teams", "comms", "consulting"]}
              >
                <p className="text-[22px] max-w-[410px] dark:text-zinc-100/50 text-blackout/50 font-medium">
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
                activeIndex={activeContentBoxIndex}
                index={1}
                keywords={["leading teams", "comms", "consulting"]}
              >
                <p className="text-[22px] max-w-[410px] dark:text-zinc-100/50 text-blackout/50 font-medium">
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
                activeIndex={activeContentBoxIndex}
                index={2}
                keywords={["leading teams", "comms", "consulting"]}
              >
                <p className="text-[22px] max-w-[410px] dark:text-zinc-100/50 text-blackout/50 font-medium">
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
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScrollContainer;
