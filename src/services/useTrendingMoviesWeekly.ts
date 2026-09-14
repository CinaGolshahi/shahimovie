import { useEffect, useState } from "react";
import type { IMovie, IResponseTrendingMovies } from "../types/movies";
import tmdbApi from "./tmdb";

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
