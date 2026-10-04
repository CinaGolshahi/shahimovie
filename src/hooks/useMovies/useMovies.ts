import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

type MovieSortBy =
  | "popularity.desc"
  | "primary_release_date.desc"
  | "vote_average.desc"
  | "revenue.desc";

interface IUseDiscoverMoviesOptions {
  sortBy?: MovieSortBy;
}

const useMovies = (props: IUseDiscoverMoviesOptions) => {
  const { sortBy = "popularity.desc" } = props;

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesIsLoading, setMoviesIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setMoviesIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMovie>>(
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

  const movieLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreMovies = page < totalPages;

  return { movies, moviesIsLoading, movieLoadMore, hasMoreMovies };
};

export type { MovieSortBy };
export default useMovies;
