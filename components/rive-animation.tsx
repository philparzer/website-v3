"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

interface RiveAnimationProps {
  src: string;
  stateMachine: string;
  isActive?: boolean;
  artboard: string;
}

const RiveAnimation = ({ src, stateMachine, isActive, artboard }: RiveAnimationProps) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachine,
    autoplay: false,
    artboard: artboard,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isActive && isLoaded) {
      rive?.play();
    }
  }, [isLoaded, isActive]);

  useEffect(() => {
    if (rive) {

      setIsLoaded(true);
    }
  }, [rive]);

  return (
   
    <div className="absolute  w-[360px] aspect-[125/101] md:w-[500px] right-0 md:right-auto">
      <div className="absolute -top-[291px] overflow-hidden left-0 w-full h-full md:-top-[401px]">
      <div className={`w-full absolute z-10 top-0  left-0 h-20 bg-gradient-to-b from-whiteout dark:from-zinc-900 to-transparent`} />
      <div className={`h-full absolute z-10 top-0 w-4 md:w-20 right-[-5px] bg-gradient-to-l blur-[1px] from-whiteout dark:from-zinc-900 via-whiteout dark:via-zinc-900 to-transparent`}/>
      <div className={`w-4 md:w-20  absolute top-0 z-10 left-0 h-full bg-gradient-to-r blur-[1px] from-whiteout dark:from-zinc-900 via-whiteout dark:via-zinc-900 to-transparent`}/>
      <RiveComponent className="invert-filter top-0 left-0 w-full h-full md:translate-x-0 translate-x-14 pointer-events-none absolute" />
      </div>
    </div>
    
  );
};

export default RiveAnimation;
