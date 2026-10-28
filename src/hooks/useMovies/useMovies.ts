import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  IMediaSummary,
  IMovieSummary,
  IPaginatedResponse,
} from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

type MovieSortField = "popularity" | "primary_release_date" | "title";
type SortDirection = "asc" | "desc";

interface IUseDiscoverMoviesOptions {
  sortBy?: `${MovieSortField}.${SortDirection}`;
}

const useMovies = (props: IUseDiscoverMoviesOptions) => {
  const { sortBy = "popularity.desc" } = props;

  const [movies, setMovies] = useState<IMediaSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesIsLoading, setMoviesIsLoading] = useState(true);
  const [moviesError, setMoviesError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setMoviesIsLoading(true);
      setMoviesError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMovieSummary>>(
          "/discover/movie",
          {
            params: {
              sort_by: sortBy,
              "primary_release_date.lte": new Date()
                .toISOString()
                .split("T")[0],
              page,
            },
          },
        );

        const moviesWithType = response.data.results.map((movie) => ({
          ...movie,
          media_type: "movie" as const,
        }));

        setMovies((prev) => [...prev, ...moviesWithType]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setMoviesError(getErrorMessage(error));
      } finally {
        setMoviesIsLoading(false);
      }
    };

    fetchMovies();
  }, [page, sortBy]);

  const loadMoreMovies = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreMovies = page < totalPages;

  return {
    movies,
    moviesIsLoading,
    moviesError,
    loadMoreMovies,
    hasMoreMovies,
  };
};

export default useMovies;
