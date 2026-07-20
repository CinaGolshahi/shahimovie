import MovieCard from "../../components/shared/movie-card";
import { mockMovies } from "../../data/movies.mock.";

const MoviesPage = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-4 p-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
      {mockMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
