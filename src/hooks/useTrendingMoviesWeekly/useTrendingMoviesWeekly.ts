import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

const useTrendingMoviesWeekly = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await tmdbApi.get<IPaginatedResponse<IMovie>>(
        "/trending/movie/week",
        {
          params: {
            "primary_release_date.lte": new Date().toISOString().split("T")[0],
          },
        },
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return { movies };
};

export default useTrendingMoviesWeekly;
