import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMotionValueEvent } from "framer-motion";

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
    offset: ["start start", "center center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    console.log("index ", index, "value", latest)

    if (latest > 0 && latest !== 1) {
      setActiveIndex(index)
    }
    
  });

  return (
    <li
    key={"test"}
      ref={ref}
      className={`relative  ${
        activeIndex !== index ? "blur-[2px] opacity-50" : ""
      }`}
    >
      <motion.div
        style={{ scale: scrollYProgress }}
        className="bg-red-200 w-20 h-20"
      ></motion.div>
      <div
        className={`w-full border relative dark:border-zinc-100/5 border-blackout/5 ${
          index === 0 ? "" : "border-t-0"
        } p-[36px]`}
      >
        {children}
        <ul className="flex  gap-8 text-sm dark:text-zinc-100/25 text-blackout/25 mt-4 font-mono">
          {keywords?.map((keyword, i) => (
            <li key={keyword + i}>{keyword}</li>
          ))}
        </ul>
      </div>
      <div className="w-full h-40 border dark:border-zinc-100/5 border-blackout/5 border-t-0 " />
    </li>
  );
};

export default ContentBox;
