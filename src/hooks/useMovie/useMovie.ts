import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  ICastMember,
  ICrewMember,
  IExternalIds,
  IMediaSummary,
  IMovie,
  IMovieWithExtras,
} from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

const useMovie = (id: string | undefined) => {
  const [movie, setMovie] = useState<IMovie>();
  const [externalIds, setExternalIds] = useState<IExternalIds>();
  const [cast, setCast] = useState<ICastMember[]>();
  const [crew, setCrew] = useState<ICrewMember[]>();
  const [recommendations, setRecommendations] = useState<IMediaSummary[]>([]);

  const [movieIsLoading, setMovieIsLoading] = useState(true);
  const [movieError, setMovieError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      setMovieIsLoading(true);
      setMovieError(null);
      try {
        const response = await tmdbApi.get<IMovieWithExtras>(`/movie/${id}`, {
          params: {
            append_to_response: "credits,external_ids,recommendations",
          },
        });
        const { credits, external_ids, recommendations, ...movieData } =
          response.data;

        setMovie(movieData);
        setExternalIds(external_ids);
        setCast(credits.cast.toSorted((a, b) => a.order - b.order));
        setCrew(credits.crew);
        setRecommendations(recommendations.results);
      } catch (error) {
        setMovieError(getErrorMessage(error));
      } finally {
        setMovieIsLoading(false);
      }
    };
    fetchMovieById();
  }, [id]);
  return {
    movie,
    cast,
    crew,
    externalIds,
    recommendations,
    movieIsLoading,
    movieError,
  };
};

export default useMovie;
