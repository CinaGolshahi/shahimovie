import { ChevronRight, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl, getYearFromDate } from "../../../utils";
import type IMovieCardProps from "./movie-card.type";

const MovieCard = (props: IMovieCardProps) => {
  const { movie, className } = props;
  return (
    <div
      key={movie.id}
      className={`${className} group relative aspect-2/3 w-full rounded-2xl border-2 border-transparent bg-gray-900 p-2 transition-all duration-300 hover:border-blue-600 xl:p-0`}
    >
      {movie.poster_path ? (
        <img
          src={`${getTmdbImageUrl(movie.poster_path, "w300")}`}
          alt={`${movie.title} (${getYearFromDate(movie.release_date)})`}
          className="h-full rounded-2xl object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <Link
        to={`/movie/${movie.id}`}
        className="inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 xl:invisible xl:absolute xl:bg-gray-900/60 xl:p-2 xl:pb-0 xl:opacity-0 xl:backdrop-blur-lg xl:group-hover:pb-2"
      >
        <p className="rounded-md px-2 py-1 font-bold xl:bg-gray-900">
          {movie.title}{" "}
          <span className="font-normal">{`(${getYearFromDate(movie.release_date)})`}</span>
        </p>
        <span className="line-clamp-2 rounded-md px-2 py-1 text-sm xl:bg-gray-900">
          {movie.overview || "Unknown"}
        </span>
      </Link>
      <div className="inset-be-0 flex w-full items-center justify-center p-2 xl:absolute xl:hidden">
        <Link
          to={`/movie/${movie.id}`}
          className="flex w-full items-center justify-between rounded-lg bg-blue-500 px-2 py-1"
        >
          <span>Watch</span>
          <ChevronRight className="mt-0.5 size-5" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
