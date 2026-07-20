import { Link } from "react-router-dom";
import type IMovieCardProps from "./movie-card.type";
import { ChevronRight } from "lucide-react";

const MovieCard = (props: IMovieCardProps) => {
  const { movie, className } = props;
  return (
    <div
      key={movie.id}
      className={`${className} group relative rounded-2xl border-2 border-transparent bg-gray-900 p-2 transition-all duration-300 hover:border-blue-600 xl:p-0`}
    >
      <img
        src={movie.posterSrc}
        alt={`${movie.title} (${movie.releaseYear})`}
        className="rounded-2xl object-cover"
      />
      <Link
        to={"/"}
        className="inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:py-2 xl:invisible xl:absolute xl:bg-gray-900/60 xl:p-2 xl:py-0 xl:opacity-0 xl:backdrop-blur-lg"
      >
        <p className="rounded-md px-2 py-1 font-bold xl:bg-gray-900">
          {movie.title}{" "}
          <span className="font-normal">{`(${movie.releaseYear})`}</span>
        </p>
        <span className="line-clamp-2 rounded-md px-2 py-1 text-sm xl:bg-gray-900">
          {movie.overview}
        </span>
      </Link>
      <div className="inset-be-0 flex w-full items-center justify-center p-2 xl:absolute xl:hidden">
        <Link
          to={"/"}
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
