import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockMovies } from "../../../../data/movies.mock.";
import MovieCard from "../../../../components/shared/movie-card";

const NewMovies = () => {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col gap-4 bg-gray-900/50 p-4 xl:container 2xl:rounded-4xl">
      <div className="flex items-center justify-between px-2">
        <p className="text-lg font-semibold">New movies</p>
        <Link
          to={"/"}
          className="flex items-center gap-0.5 text-blue-500 hover:underline"
        >
          <span>See more</span>
          <ChevronRight className="mt-0.5 size-5" />
        </Link>
      </div>

      <div className="flex scrollbar-none gap-4 overflow-auto md:grid md:grid-cols-3 xl:grid-cols-6">
        {mockMovies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} className="min-w-2/3" />
        ))}
      </div>
    </div>
  );
};

export default NewMovies;
