import { ImageOff, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { ITVShowCardProps } from "./WideShowCard.type";

const WideShowCard = (props: ITVShowCardProps) => {
  const { show, className } = props;

  return (
    <Link
      to={`/show/${show.id}`}
      className={`${className} group relative flex aspect-video max-h-40 w-full gap-4 rounded-2xl bg-gray-900/50 p-2 outline-2 outline-gray-900/50 transition-all delay-75 duration-300 hover:outline-blue-600`}
    >
      {show.poster_path ? (
        <img
          src={`${getTmdbImageUrl(show.poster_path, "w300")}`}
          alt={`${show.name}`}
          className="aspect-2/3 h-full rounded-xl object-cover outline outline-gray-800"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-2/3 h-full items-center justify-center rounded-xl bg-gray-950 object-cover">
          <ImageOff className="size-8 stroke-gray-700" />
        </div>
      )}
      <div className="relative flex flex-col gap-2 pt-2">
        <p className="flex flex-col gap-0.5">
          <span className="font-bold">
            <Tv className="me-1 -mt-1 inline size-4" />
            <span>
              <span>{show.name}</span>
            </span>
          </span>
          {show.name !== show.original_name && (
            <span className="text-sm text-gray-600 italic">
              {show.original_name}
            </span>
          )}
        </p>

        {show.overview && (
          <p className="line-clamp-3 text-gray-400">{show.overview}</p>
        )}
      </div>
    </Link>
  );
};

export default WideShowCard;
