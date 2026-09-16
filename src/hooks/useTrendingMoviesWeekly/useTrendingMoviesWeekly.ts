import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IResponseTrendingMovies } from "../../types/movies";

const useTrendingMoviesWeekly = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await tmdbApi.get<IResponseTrendingMovies>(
        "/trending/movie/week",
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return { movies };
};

export default useTrendingMoviesWeekly;
