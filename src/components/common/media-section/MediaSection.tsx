import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaCard, MediaCardLoader } from "../../shared/media-card";
import type { IMediaSection } from "./MediaSection.type";

const MediaSection = ({ title, link, loading, media }: IMediaSection) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-4 bg-gray-900/50 p-4 xl:container 2xl:rounded-4xl">
      <div className="flex items-center justify-between px-2">
        <p className="text-lg font-semibold">{title}</p>
        {link && (
          <Link
            to={link}
            className="flex items-center gap-0.5 text-blue-500 hover:underline"
          >
            <span>See more</span>
            <ChevronRight className="mt-0.5 size-5" />
          </Link>
        )}
      </div>

      <div className="flex gap-4 overflow-auto md:grid md:grid-cols-3 xl:grid-cols-6">
        {loading ? (
          <>
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
          </>
        ) : (
          <>
            {media.slice(0, 6).map((item) => (
              <MediaCard key={item.id} media={item} className="min-w-2/3" />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MediaSection;
