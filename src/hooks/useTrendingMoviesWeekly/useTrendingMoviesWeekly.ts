import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

const useTrendingMoviesWeekly = () => {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [trendingMoviesIsLoading, setTrendingMoviesIsLoading] = useState(true);
  const [trendingMoviesError, setTrendingMoviesError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setTrendingMoviesIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMovie>>(
          "/trending/movie/week",
        );
        setTrendingMovies(response.data.results);
      } catch (err) {
        setTrendingMoviesError(
          err instanceof Error ? err.message : "Something went wrong",
        );
      } finally {
        setTrendingMoviesIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return { trendingMovies, trendingMoviesIsLoading, trendingMoviesError };
};

export default useTrendingMoviesWeekly;
