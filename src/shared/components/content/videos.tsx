import youtubeVideos from "@constants/youtube-videos.json";
import { Play } from "lucide-react";

interface Video {
  title: string;
  link: string;
  pubDate: string;
  videoId: string;
  thumbnail: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a href={video.link} target="_blank" rel="noreferrer">
      <div className="group/video flex h-80 w-full cursor-pointer flex-col-reverse gap-4 overflow-hidden rounded bg-muted/50 px-6 py-4 backdrop-blur-md hover:bg-accent md:h-36 md:flex-row md:gap-8">
        <div className="flex min-w-fit flex-col pt-1">
          <div className="relative box-border w-fit overflow-hidden rounded border border-muted-foreground/30 group-hover/video:border-muted-foreground/50">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-24 w-32 rounded object-cover grayscale transition-[filter] duration-300 group-hover/video:grayscale-0 md:h-20 md:w-20"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Play className="h-6 w-6 fill-white text-white" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <p className="text-base font-medium text-foreground md:text-lg">{video.title}</p>
              <p className="whitespace-nowrap text-sm text-muted-foreground md:text-right">
                {new Date(video.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">{video.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

interface VideoListProps {
  limit?: number;
}

export function VideoList({ limit }: VideoListProps) {
  const displayedVideos = limit ? youtubeVideos.slice(0, limit) : youtubeVideos;

  return (
    <div className="flex w-full flex-col gap-4">
      {displayedVideos.map((video) => (
        <VideoCard key={video.link} video={video as Video} />
      ))}
    </div>
  );
}
