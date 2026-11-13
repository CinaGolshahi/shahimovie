import { MediaCard, MediaCardLoader } from "../../components/shared/media-card";
import Breadcrumb from "../../components/ui/breadcrumb";
import { useMovies } from "../../hooks";

const MoviesPage = () => {
  const { hasMoreMovies, loadMoreMovies, movies, moviesIsLoading } = useMovies(
    {},
  );

  return (
    <div className="container mx-auto flex flex-col gap-2 p-2 pt-6 xl:-mt-4 xl:px-8 xl:pt-0">
      <Breadcrumb items={[{ label: "Home", link: "/" }, { label: "Movies" }]} />
      {moviesIsLoading && movies.length === 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Array.from({ length: 10 }, (_, index) => (
            <MediaCardLoader key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {movies.map((movie) => (
              <MediaCard key={movie.id} media={movie} />
            ))}
          </div>
          {hasMoreMovies && (
            <button
              onClick={loadMoreMovies}
              disabled={moviesIsLoading}
              className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
            >
              {moviesIsLoading ? "Loading..." : "See More"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default MoviesPage;
