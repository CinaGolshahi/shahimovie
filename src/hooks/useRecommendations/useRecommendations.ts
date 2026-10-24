import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMediaSummary, IPaginatedResponse } from "../../types/tmdb";

interface IUseRecommendations {
  id: string;
  type: "movie" | "tv";
}

const useRecommendations = (props: IUseRecommendations) => {
  const { id, type } = props;
  const [recommendations, setRecommendations] = useState<IMediaSummary[]>([]);
  const [recommendationsIsLoading, setRecommendationsIsLoading] =
    useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setRecommendationsIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMediaSummary>>(
          `/${type}/${id}/recommendations`,
        );
        setRecommendations(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setRecommendationsIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [id, type]);

  return { recommendations, recommendationsIsLoading };
};

export default useRecommendations;
