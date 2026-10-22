import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { IPaginatedResponse, ITVShow } from "../../types/tmdb";

const useShowRecommendations = () => {
  const { id } = useParams<{ id: string }>();
  const [showRecommendations, setShowRecommendations] = useState<ITVShow[]>([]);
  const [showRecommendationsIsLoading, setShowRecommendationsIsLoading] =
    useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setShowRecommendationsIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<ITVShow>>(
          `/tv/${id}/recommendations`,
        );
        setShowRecommendations(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setShowRecommendationsIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [id]);

  return { showRecommendations, showRecommendationsIsLoading };
};

export default useShowRecommendations;
