import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import type { IMovieSummary } from "../../../../../types/tmdb";
import { getTmdbImageUrl, getYearFromDate } from "../../../../../utils";

interface IMovieSlide {
  item: IMovieSummary;
}

const MovieSlide = ({ item }: IMovieSlide) => {
  return (
    <Link
      to={`/movie/${item.id}`}
      className="group relative size-full rounded-lg"
    >
      {item.backdrop_path && item.poster_path ? (
        <>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${getTmdbImageUrl(item.backdrop_path, "original")}`}
            />

            <img
              src={`${getTmdbImageUrl(item.poster_path, "w780")}`}
              alt={`${item.title} (${getYearFromDate(item.release_date)})`}
              className="size-full rounded-lg object-cover"
            />
          </picture>

          <div className="absolute inset-0 hidden items-end justify-start gap-6 rounded-lg bg-linear-to-b from-transparent to-gray-950/80 p-20 pb-16 opacity-0 transition-all delay-75 duration-300 group-hover:pb-20 group-hover:opacity-100 group-hover:backdrop-blur-lg xl:flex">
            <img
              src={`${getTmdbImageUrl(item.poster_path, "w500")}`}
              alt=""
              className="hidden w-1/5 rounded-xl xl:block"
            />
            <div className="hidden flex-col gap-2 pb-6 xl:flex">
              <p className="text-4xl font-bold">{item.title}</p>
              <span className="text-2xl font-bold">{`(${getYearFromDate(item.release_date)})`}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
    </Link>
  );
};

export default MovieSlide;
