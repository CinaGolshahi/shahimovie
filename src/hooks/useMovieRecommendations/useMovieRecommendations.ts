import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovieSummary, IPaginatedResponse } from "../../types/tmdb";

interface IUseMovieRecommendations {
  id: string;
}

const useMovieRecommendations = (props: IUseMovieRecommendations) => {
  const { id } = props;
  const [movieRecommendations, setMovieRecommendations] = useState<IMovieSummary[]>(
    [],
  );
  const [movieRecommendationsIsLoading, setMovieRecommendationsIsLoading] =
    useState(true);

  useEffect(() => {
    const fetchMovieRecommendations = async () => {
      setMovieRecommendationsIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMovieSummary>>(
          `/movie/${id}/recommendations`,
        );
        setMovieRecommendations(response.data.results);
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
