import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl, getYearFromDate } from "../../../../utils";
import type { IMovieCardProps } from "./MovieCard.type";

const MovieCard = (props: IMovieCardProps) => {
  const { movie } = props;
  if (movie.media_type === "movie") {
    return (
      <Link
        to={`/movie/${movie.id}`}
        key={movie.id}
        className={`group relative aspect-2/3 w-full rounded-2xl border-2 border-transparent bg-gray-900 transition-all duration-300 hover:border-blue-600`}
      >
        {movie.poster_path ? (
          <img
            src={`${getTmdbImageUrl(movie.poster_path, "w300")}`}
            alt={`${movie.title} ${movie.release_date && `(${getYearFromDate(movie.release_date)})`}`}
            className="size-full rounded-2xl object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <ImageOff className="size-10 stroke-gray-700" />
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 rounded-2xl bg-linear-to-b from-transparent to-gray-900 p-2 text-center transition-all duration-300 xl:items-start xl:p-4 xl:pb-0 xl:text-start xl:opacity-0 xl:group-hover:pb-4 xl:group-hover:opacity-100">
          <p className="line-clamp-2 text-sm font-bold xl:text-base">
            {movie.title}{" "}
            <span className="text-xs font-normal xl:text-sm">
              {movie.release_date && `(${getYearFromDate(movie.release_date)})`}
            </span>
          </p>
          <span className="line-clamp-2 text-sm">
            {movie.overview ?? "Unknown"}
          </span>
        </div>
      </Link>
    );
  }
};

export default MovieCard;
