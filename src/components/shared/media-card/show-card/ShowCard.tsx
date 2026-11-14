import { ImageOff, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl, getYearFromDate } from "../../../../utils";
import type { ITVShowCardProps } from "./ShowCard.type";

const ShowCard = (props: ITVShowCardProps) => {
  const { show, className } = props;
  return (
    <Link
      to={`/show/${show.id}`}
      key={show.id}
      className={`${className} group relative aspect-2/3 w-full overflow-hidden rounded-2xl bg-gray-900 p-0.5 transition-all duration-300`}
    >
      {show.poster_path ? (
        <img
          src={`${getTmdbImageUrl(show.poster_path, "w500")}`}
          alt={`${show.name}`}
          className="size-full rounded-2xl object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl bg-linear-to-b from-transparent to-gray-950 p-4 opacity-0 transition-all duration-300 group-hover:pb-4 group-hover:opacity-100 xl:pb-0">
        <p className="line-clamp-2 font-bold">{show.name}</p>
        <span className="line-clamp-2 text-sm">
          {show.overview && show.overview}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 px-3 py-2 text-gray-500 transition-all duration-300 xl:group-hover:invisible xl:group-hover:-bottom-1 xl:group-hover:opacity-0">
        <div>
          <Tv className="size-4" />
        </div>
        {show.first_air_date && (
          <span>{getYearFromDate(show.first_air_date)}</span>
        )}
      </div>
    </Link>
  );
};

export default ShowCard;
