import { Film, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl, getYearFromDate } from "../../../../utils";
import type { IMovieCardProps } from "./WideMovieCard.type";

const WideMovieCard = (props: IMovieCardProps) => {
  const { movie, className } = props;

  return (
    <Link
      to={`/movie/${movie.id}`}
      className={`${className} group relative flex aspect-video max-h-40 w-full gap-2 rounded-2xl bg-gray-900/50 p-2 outline-2 outline-gray-900/50 transition-all delay-75 duration-300 hover:outline-blue-600`}
    >
      {movie.poster_path ? (
        <img
          src={`${getTmdbImageUrl(movie.poster_path, "w300")}`}
          alt={`${movie.title}`}
          className="aspect-2/3 h-full rounded-xl object-cover outline outline-gray-800"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-2/3 h-full items-center justify-center rounded-xl bg-gray-950 object-cover">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="relative flex flex-col gap-2 pt-2">
        <p className="flex flex-col gap-0.5">
          <span className="font-bold">
            <Film className="me-1 -mt-1 inline size-4" />
            <span>
              <span>{movie.title}</span>
              {movie.release_date && (
                <span className="font-normal">{` (${getYearFromDate(movie.release_date)})`}</span>
              )}
            </span>
          </span>
          {movie.title !== movie.original_title && (
            <span className="text-sm text-gray-600 italic">
              {movie.original_title}
            </span>
          )}
        </p>

        {movie.overview && (
          <p className="line-clamp-3 text-gray-400">{movie.overview}</p>
        )}
      </div>
    </Link>
  );
};

export default WideMovieCard;
