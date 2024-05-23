import Link from "next/link";
import authProvider from "@/lib/twitch-auth";
import { ApiClient } from "@twurple/api";
import moment from "moment-timezone";

const TwitchBanner = async () => {

  const twitchApi = new ApiClient({ authProvider });

  const { data: schedule } = await twitchApi.schedule.getSchedule("63996301");
  const stream = await twitchApi.streams.getStreamByUserId("63996301");

  const now = moment.utc().tz("Europe/Luxembourg");

  if (stream) {
    return (
      <Link
        href="https://twitch.tv/philguin"
        target="_blank"
        rel="noopener noreferrer"
        className="relative pointer-events-auto transition-all animate-in slide-in-from-top-36"
      >
        <div className="px-3 text-xs sm:text-base py-1 flex dark:hover:ring-red-600 dark:ring-red-600/50 ring-red-500/50 hover:ring-red-500 transition-colors animate-minimal-pulse ring-2 ring-offset-2 items-center gap-2 dark:bg-red-600 bg-red-500 text-white rounded-md sm:font-semibold ">
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
      const segmentStart = moment.utc(segment.startDate).tz("Europe/Luxembourg");
      return (
        segmentStart.hours() <= now.hours() && // Check if the stream should have started
        segmentStart.date() === now.date() // Check if it's the same day
      );
    })
  ) {
    return (
      <div className="text-xs sm:text-sm pointer-events-auto">
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

  return null;
};

export default TwitchBanner;
