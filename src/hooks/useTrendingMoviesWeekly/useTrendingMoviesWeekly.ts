import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

const useTrendingMoviesWeekly = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await tmdbApi.get<IPaginatedResponse>(
        "/trending/movie/week",
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return { movies };
};

export default useTrendingMoviesWeekly;
