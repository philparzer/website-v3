"use client";

import Rive from "@rive-app/react-canvas";

interface RiveAnimationProps {
  src: string;
  stateMachine: string;
  isActive?: boolean;
}

const RiveAnimation = ({ src, stateMachine, isActive }: RiveAnimationProps) => (
  <div className="absolute w-[500px] h-[404px]">
    <div className="w-full absolute z-10 -top-[400px]  left-0 h-20 bg-gradient-to-b from-whiteout to-transparent"></div>
    <Rive
      className="invert-filter pointer-events-none absolute -top-[400px] left-0 w-full h-full "
      src={src}
      stateMachines={stateMachine}
    />
  </div>
);

export default RiveAnimation;
