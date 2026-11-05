import { Film, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import type { IMovieSummary } from "../../../../../types/tmdb";
import { getTmdbImageUrl, getYearFromDate } from "../../../../../utils";

interface IMovieSlide {
  movie: IMovieSummary;
}

const MovieSlide = ({ movie }: IMovieSlide) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative size-full rounded-lg"
    >
      {movie.backdrop_path && movie.poster_path ? (
        <>
          <picture>
            <source
              media="(min-width: 1000px)"
              srcSet={`${getTmdbImageUrl(movie.backdrop_path, "original")}`}
            />

            <img
              src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
              alt={`${movie.title} (${getYearFromDate(movie.release_date)})`}
              className="size-full rounded-lg object-cover"
            />
          </picture>

          <div className="invisible absolute inset-0 hidden gap-6 rounded-lg bg-linear-to-b to-gray-950 opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 xl:block">
            <div className="absolute inset-x-0 top-0 flex items-center justify-end p-10"></div>
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 px-20 pb-16 transition-all duration-300 group-hover:pb-20">
              <img
                src={`${getTmdbImageUrl(movie.poster_path, "w200")}`}
                alt=""
                className="aspect-2/3 w-1/5 rounded-xl outline outline-gray-900"
              />
              <div className="flex flex-col items-start gap-4 pb-6">
                <p className="text-4xl font-bold">{movie.title}</p>
                <div className="flex items-center gap-2">
                  <div>
                    <Film className="mb-0.5 size-5" />
                  </div>
                  {movie.release_date && (
                    <span className="text-xl">
                      {getYearFromDate(movie.release_date)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 px-2 py-1 text-gray-300 md:hidden">
        <div>
          <Film className="size-4" />
        </div>
        {movie.release_date && (
          <span>{getYearFromDate(movie.release_date)}</span>
        )}
      </div>
    </Link>
  );
};

export default MovieSlide;
