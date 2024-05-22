import Link from "next/link";
import authProvider from "@/lib/twitch-auth";
import { ApiClient } from "@twurple/api";

const TwitchBanner = async () => {
  const twitchApi = new ApiClient({ authProvider });
  const { data: schedule } = await twitchApi.schedule.getSchedule("63996301");
  const stream = await twitchApi.streams.getStreamByUserId("63996301");
  const now = new Date();

  if (stream) {
    return (
      <Link
        href="https://twitch.tv/philguin"
        target="_blank"
        rel="noopener noreferrer"
        className="relative pointer-events-auto animate-in fade-in-10 slide-in-from-top-10"
      >
        <div className="px-3 text-xs sm:text-base py-1 flex delay-200 dark:hover:ring-red-600 dark:ring-red-600/50 ring-red-500/50 hover:ring-red-500 transition-colors animate-minimal-pulse ring-2 ring-offset-2 items-center gap-2 dark:bg-red-600 bg-red-500 text-white rounded-md sm:font-semibold ">
          <span>
            <span className="text-white/75">Live on</span>{" "}
            <span className="sm:font-semibold font-medium">Twitch</span>
          </span>
        </div>
      </Link>
    );
  }

  if (
    schedule.segments.some((segment) => {
      return (
        segment.startDate.getHours() <= now.getHours() && //check if the stream shouldve started
        segment.startDate.getDate() === now.getDate() //check if it's the same day
      );
    })
  ) {
    return (
      <div className="text-xs sm:text-sm pointer-events-auto animate-in fade-in-10">
        <div className="">
          should be live on{" "}
          <Link href="https://twitch.tv/philguin">Twitch</Link> rn
        </div>
        <div className="flex gap-4">
          <div className="gap-2 flex items-center">
            lazy <span className="font-bold text-sm">{" :I"}</span>
          </div>
        </div>
      </div>
    );
  }

  return;
  null;
};

export default TwitchBanner;
