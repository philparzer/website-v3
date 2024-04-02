import { type ReactNode } from "react";

interface TitledParagraphProps {
  title: string;
  children: ReactNode;
}

const TitledParagraph = ({ title, children }: TitledParagraphProps) => {
  return (
    <div className="relative">
      <div className="absolute  h-full -left-10 top-0 w-10 pointer-events-none">
        <h2 className="-rotate-90 w-full  h-full flex items-center justify-center text-sm font-mono lowercase opacity-60 whitespace-nowrap">{title}</h2>
      </div>
      <div className="text-base sm:text-lg">{children}</div>
    </div>
  );
};

export default TitledParagraph;
