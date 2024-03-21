export default function Home() {
  return (
    <>
      <div className="relative w-full mb-[400px]">
        <div className="sticky top-[296px] translate-x-[100px] max-w-[792px] w-full flex justify-center">
          <div className=" block -translate-x-[80px]  text-[32px]  font-semibold gap-4 items-baseline left-0 ">
            Philipp <span className="opacity-50 text-[22px]">is</span>{" "}
            <span>aware</span>
          </div>
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <section className="max-w-[792px] translate-x-[100px] w-full mt-[296px] relative">
            <div className="h-full right-0 top-0 absolute w-[20%] bg-gradient-to-l dark:from-zinc-900 from-whiteout to-transparent z-10" />

            <div className="w-full border dark:border-zinc-100/5 mt-2 p-[36px]">
              <p className="text-[22px] max-w-[410px] dark:text-zinc-100/50 font-medium">
                I can deal with{" "}
                <span className="dark:text-zinc-100">hard deadlines</span> and
                even harder{" "}
                <span className="dark:text-zinc-100">
                  business requirements
                </span>
              </p>
              <ul className="flex  gap-8 text-sm text-zinc-100/25 mt-4 blur-[0.5px] font-mono">
                <li>consulting</li>
                <li>leading teams</li>
                <li>comms</li>
              </ul>
            </div>
            <div className="w-full h-40 border border-zinc-100/5 border-t-0 blur-[1px]" />

            <div className="w-full h-40 border border-t-0 border-zinc-100/5 blur-[1px]"></div>
            <div className="w-full h-40 border border-zinc-100/5 border-t-0 blur-[1px]" />
          </section>
        </main>
      </div>
      <div className="h-screen pt-[200px] flex dark:bg-zinc-800 justify-center w-full">
        
      </div>
    </>
  );
}
