import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovieSummary, IPaginatedResponse } from "../../types/tmdb";

type MovieSortField = "popularity" | "primary_release_date" | "title";
type SortDirection = "asc" | "desc";
export type MovieSortBy = `${MovieSortField}.${SortDirection}`;

interface IUseDiscoverMoviesOptions {
  sortBy?: MovieSortBy;
}

const useMovies = (props: IUseDiscoverMoviesOptions) => {
  const { sortBy = "popularity.desc" } = props;

  const [movies, setMovies] = useState<IMovieSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesIsLoading, setMoviesIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setMoviesIsLoading(true);
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
        setMovies((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
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

  return { movies, moviesIsLoading, loadMoreMovies, hasMoreMovies };
};

export default useMovies;
