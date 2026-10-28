import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMediaSummary, IPaginatedResponse } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUseRecommendations {
  id: string;
  type: "movie" | "tv";
}

const useRecommendations = (props: IUseRecommendations) => {
  const { id, type } = props;
  const [recommendations, setRecommendations] = useState<IMediaSummary[]>([]);
  const [recommendationsIsLoading, setRecommendationsIsLoading] =
    useState(true);
  const [recommendationsError, setRecommendationsError] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setRecommendationsIsLoading(true);
      setRecommendationsError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMediaSummary>>(
          `/${type}/${id}/recommendations`,
        );
        setRecommendations(response.data.results);
      } catch (error) {
        setRecommendationsError(getErrorMessage(error));
      } finally {
        setRecommendationsIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [id, type]);

  return { recommendations, recommendationsIsLoading, recommendationsError };
};

export default useRecommendations;
