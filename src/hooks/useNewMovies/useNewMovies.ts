import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/movies";

const useNewMovies = () => {
  const [newMovies, setNewMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [newMoviesIsLoading, setNewMoviesIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setNewMoviesIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse>(
          "/discover/movie",
          {
            params: {
              sort_by: "primary_release_date.desc",
              "primary_release_date.lte": new Date()
                .toISOString()
                .split("T")[0],
              page,
            },
          },
        );
        setNewMovies((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } finally {
        setNewMoviesIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [page]);

  const newMovieLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMore = page < totalPages;

  return { newMovies, newMoviesIsLoading, newMovieLoadMore, hasMore };
};

export default useNewMovies;
