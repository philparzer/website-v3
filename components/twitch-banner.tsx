import Link from "next/link";
import authProvider from "@/lib/twitch-auth";
import { ApiClient } from "@twurple/api";

const TwitchBanner = async () => {
  const twitchApi = new ApiClient({ authProvider });
  const { data: schedule } = await twitchApi.schedule.getSchedule("63996301");
  const stream = await twitchApi.streams.getStreamByUserId("63996301ddd");
  const now = new Date();

  if (stream) {
    return (
      <Link
        href="https://twitch.tv/philguin"
        target="_blank"
        rel="noopener noreferrer"
        className="relative pointer-events-auto"
      >
        <div className="px-3 py-1 flex ring-red-500/50 hover:ring-red-500 transition-colors animate-minimal-pulse ring-2 ring-offset-2 items-center gap-2 bg-red-500 text-white rounded-md font-semibold ">
          <span>
            <span className="text-white/75">Live on</span> Twitch
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
    return <>should be live but isn't</>;
  }

  return;
  null;
};

export default TwitchBanner;
