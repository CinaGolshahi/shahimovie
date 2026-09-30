import MovieCard from "../../components/shared/movie-card";
import useNewMovies from "../../hooks/useNewMovies";

const MoviesPage = () => {
  const { newMovies, hasMore, newMovieLoadMore, newMoviesIsLoading } =
    useNewMovies();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2 xl:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {newMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={newMovieLoadMore}
          disabled={newMoviesIsLoading}
          className="w-full cursor-pointer rounded-xl bg-blue-500 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
        >
          {newMoviesIsLoading ? "Loading..." : "See More"}
        </button>
      )}
    </div>
  );
};

export default MoviesPage;
