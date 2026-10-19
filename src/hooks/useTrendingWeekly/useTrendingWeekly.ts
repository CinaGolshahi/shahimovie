import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMediaSummary, IPaginatedResponse } from "../../types/tmdb";

const useTrendingWeekly = () => {
  const [trendingWeekly, setTrendingWeekly] = useState<IMediaSummary[]>([]);
  const [trendingWeeklyIsLoading, setTrendingWeeklyIsLoading] = useState(true);
  const [trendingWeeklyError, setTrendingWeeklyError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchTrendingWeekly = async () => {
      setTrendingWeeklyIsLoading(true);
      try {
        const response =
          await tmdbApi.get<IPaginatedResponse<IMediaSummary>>(
            "/trending/all/week",
          );
        setTrendingWeekly(response.data.results);
      } catch (err) {
        setTrendingWeeklyError(
          err instanceof Error ? err.message : "Something went wrong",
        );
      } finally {
        setTrendingWeeklyIsLoading(false);
      }
    };

    fetchTrendingWeekly();
  }, []);

  return { trendingWeekly, trendingWeeklyIsLoading, trendingWeeklyError };
};

export default useTrendingWeekly;
