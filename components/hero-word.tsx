import { motion } from "framer-motion";

interface HeroWordProps {
  word: string;
}

const HeroWord = ({ word }: HeroWordProps) => {
  return (
    <motion.div
      className={`absolute left-0 top-0  rounded-lg`}
      key={`${word}`}
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
      <div className="text-[20px] md:text-[30px] relative z-10">{word}</div>
    </motion.div>
  );
};

export default HeroWord;
