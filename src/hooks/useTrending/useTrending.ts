import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMediaSummary, IPaginatedResponse } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

const useTrending = (type: "week" | "day") => {
  const [trending, setTrending] = useState<IMediaSummary[]>([]);
  const [trendingIsLoading, setTrendingIsLoading] = useState(true);
  const [trendingError, setTrendingError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setTrendingIsLoading(true);
      setTrendingError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMediaSummary>>(
          `/trending/all/${type}`,
        );
        setTrending(response.data.results);
      } catch (error) {
        setTrendingError(getErrorMessage(error));
      } finally {
        setTrendingIsLoading(false);
      }
    };

    fetchTrending();
  }, [type]);

  return { trending, trendingIsLoading, trendingError };
};

export default useTrending;
