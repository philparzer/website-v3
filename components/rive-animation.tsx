"use client"

import Rive from '@rive-app/react-canvas';

const RiveAnimation = () => (
  <Rive
    className="invert-filter absolute -top-[400px] left-0 w-[500px] h-[404px]"
    src="/rive/websitev3.riv"
    stateMachines="1"
  />
);

export default RiveAnimation;