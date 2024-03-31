"use client";

import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

interface RiveAnimationProps {
  src: string;
  stateMachine: string;
  isActive?: boolean;
}

const RiveAnimation = ({ src, stateMachine, isActive }: RiveAnimationProps) => {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachine,
    autoplay: false,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isActive && isLoaded) {
      console.log("playing");
      rive?.play();
    }
  }, [isLoaded, isActive]);

  useEffect(() => {
    if (rive) {
      console.log("loaded");
      setIsLoaded(true);
    }
  }, [rive]);

  return (
    <div className="absolute w-[500px] h-[404px]">
      <div className="w-full absolute z-10 -top-[400px]  left-0 h-20 bg-gradient-to-b from-whiteout to-transparent" />
      <div className="h-full absolute z-10 -top-[200px] w-20 right-[-5px]  bg-gradient-to-l blur-[1px] from-whiteout via-whiteout to-transparent" />
      <div className="w-20  absolute z-10 -top-[200px] left-0 h-full bg-gradient-to-r blur-[1px] from-whiteout via-whiteout to-transparent" />
      <RiveComponent className="invert-filter pointer-events-none absolute -top-[400px] left-0 w-full h-full " />
    </div>
  );
};

export default RiveAnimation;
