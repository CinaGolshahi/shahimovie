import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useMovies from "../../../hooks/useMovies";
import MovieCard from "../../shared/movie-card";
import ShowCard from "../../shared/show-card";
import type { IMediaSection } from "./MediaSection.type";

const MediaSection = ({
  title,
  link,
  show,
  sort = "popularity.desc",
}: IMediaSection) => {
  const { movies } = useMovies({ sortBy: sort });

  return (
    <div className="mx-auto mt-10 flex w-full flex-col gap-4 bg-gray-900/50 p-4 xl:container 2xl:rounded-4xl">
      <div className="flex items-center justify-between px-2">
        <p className="text-lg font-semibold">{title}</p>
        <Link
          to={link}
          className="flex items-center gap-0.5 text-blue-500 hover:underline"
        >
          <span>See more</span>
          <ChevronRight className="mt-0.5 size-5" />
        </Link>
      </div>

      <div className="flex scrollbar-none gap-4 overflow-auto md:grid md:grid-cols-3 xl:grid-cols-6">
        {movies?.slice(0, 6).map((item) => (
          <MovieCard key={item.id} movie={item} className="min-w-2/3" />
        ))}

        {show?.slice(0, 6).map((item) => (
          <ShowCard key={item.id} show={item} className="min-w-2/3" />
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
