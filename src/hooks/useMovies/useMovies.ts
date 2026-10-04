import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

const useMovies = () => {
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
  }, [page]);

  const movieLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreMovies = page < totalPages;

  return { movies, moviesIsLoading, movieLoadMore, hasMoreMovies };
};

export default useMovies;
