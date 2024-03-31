import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { useDebounce } from "@uidotdev/usehooks";
import RiveAnimation from "./rive-animation";

interface ContentBoxProps {
  children?: React.ReactNode;
  animation?: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  keywords?: string[];
}

const ContentBox = ({
  children,
  animation,
  activeIndex,
  keywords,
  setActiveIndex,
  index,
}: ContentBoxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "0.05 center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("index ", index, "value", latest);

    if (latest > 0 && latest !== 1) {
      setActiveIndex(index);
    }
  });

  return (
    <motion.li
      key={"test"}
      ref={ref}
      className={`transition-all relative  ${
        activeIndex !== index ? "blur-[1px] opacity-50" : ""
      }`}
    >
      <RiveAnimation></RiveAnimation>
      <motion.div
        className={`w-full border relative ${
          activeIndex === index
            ? "border-black/10 bg-zinc-50 dark:bg-whiteout/[0.025]  backdrop-blur-lg border-t dark:border-zinc-100/10"
            : "dark:border-zinc-100/5 border-blackout/5"
        }  ${index === 0 ? "" : "border-t-0"} p-[36px]`}
        style={activeIndex !== index ? undefined : { opacity: scrollYProgress }}
      >
        {children}
        <ul className="flex gap-8 text-sm dark:text-zinc-100/25 text-blackout/25 mt-4 font-mono">
          {keywords?.map((keyword, i) => (
            <li key={keyword + i}>{keyword}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="w-full h-[200px] border dark:border-zinc-100/5 border-blackout/5 border-t-0 " />
    </motion.li>
  );
};

export default ContentBox;
