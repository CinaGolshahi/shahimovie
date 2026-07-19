import { Link } from "react-router-dom";
import type IMovieCardProps from "./movie-card.type";

const MovieCard = (props: IMovieCardProps) => {
  const { movie, className } = props;
  return (
    <div
      key={movie.id}
      className={`group relative rounded-2xl border-2 border-blue-600 transition-all duration-300 hover:border-blue-600 xl:border-transparent ${className}`}
    >
      <img
        src={movie.posterSrc}
        alt={`${movie.title} (${movie.releaseYear})`}
        className="rounded-2xl object-cover"
      />
      <Link
        to={"/"}
        className="absolute inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl p-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:py-2 xl:invisible xl:bg-gray-900/60 xl:py-0 xl:opacity-0 xl:backdrop-blur-lg"
      >
        <p className="rounded-md bg-gray-900 px-2 py-1 font-semibold">
          {movie.title}{" "}
          <span className="font-normal">{`(${movie.releaseYear})`}</span>
        </p>
        <span className="line-clamp-2 rounded-md bg-gray-900 px-2 py-1 text-sm">
          {movie.overview}
        </span>
      </Link>
    </div>
  );
};

export default MovieCard;
