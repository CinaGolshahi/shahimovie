import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { ITVShowCardProps } from "./ShowCard.type";

const ShowCard = (props: ITVShowCardProps) => {
  const { show } = props;
  return (
    <Link
      to={`/show/${show.id}`}
      key={show.id}
      className={`group relative aspect-2/3 w-full rounded-2xl border-2 border-transparent bg-gray-900 transition-all duration-300 hover:border-blue-600`}
    >
      {show.poster_path ? (
        <img
          src={`${getTmdbImageUrl(show.poster_path, "w500")}`}
          className="size-full rounded-2xl object-cover"
          alt=""
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 rounded-2xl bg-linear-to-b from-transparent to-gray-900 p-2 text-center transition-all duration-300 xl:items-start xl:p-4 xl:pb-0 xl:text-start xl:opacity-0 xl:group-hover:pb-4 xl:group-hover:opacity-100">
        <span className="line-clamp-2 text-sm font-bold xl:text-base">
          {show.name}
        </span>
        <span className="line-clamp-2 text-sm">
          {show.overview ?? "Unknown"}
        </span>
      </div>
    </Link>
  );
};

export default ShowCard;
