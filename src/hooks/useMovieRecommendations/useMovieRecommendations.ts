import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/tmdb";

const useMovieRecommendations = () => {
  const { id } = useParams<{ id: string }>();
  const [movieRecommendations, setMovieRecommendations] = useState<IMovie[]>(
    [],
  );
  const [movieRecommendationsIsLoading, setMovieRecommendationsIsLoading] =
    useState(true);

  useEffect(() => {
    const fetchMovieRecommendations = async () => {
      setMovieRecommendationsIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMovie>>(
          `/movie/${id}/recommendations`,
        );
        setMovieRecommendations(response.data.results);
        setMovieRecommendationsIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setMovieRecommendationsIsLoading(false);
      }
    };

    fetchMovieRecommendations();
  }, [id]);

  return { movieRecommendations, movieRecommendationsIsLoading };
};

export default useMovieRecommendations;
