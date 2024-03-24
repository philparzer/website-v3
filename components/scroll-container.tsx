"use client";

import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ContentBox from "./content-box";

interface ScrollContainerProps {}

const WORDS = ["aware", "cutting-edge", "proficient", "daring"];

const ScrollContainer = ({}: ScrollContainerProps) => {
  const [activeContentBoxIndex, setActiveContentBoxIndex] = useState(0);

  return (
    <div className="relative w-full mb-[400px] flex flex-col items-center">
      <div className="relative -translate-x-[60px]">
        <div className="sticky top-[290px] left-0 translate-x-[100px] max-w-[792px] w-full flex justify-center">
          <div className="flex gap-4 -translate-x-[360px]  text-[32px]  font-semibold items-baseline left-0 ">
            Philipp <span className="opacity-50 text-[22px]">is</span>{" "}
            <span className="text-[30px]">{WORDS[activeContentBoxIndex]}</span>
          </div>
        </div>
        <main className="flex min-h-screen flex-col justify-between">
          <section className="max-w-[792px] w-full mt-[310px] relative">
            <div className="h-full right-0 top-0 absolute w-[20%] bg-gradient-to-l  dark:from-zinc-900 from-whiteout to-transparent z-10" />
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
