import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  IMediaSummary,
  IPaginatedResponse,
  ITVShowSummary,
} from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

type TvSortField = "popularity" | "first_air_date" | "original_name";
type SortDirection = "asc" | "desc";
export type TVSortBy = `${TvSortField}.${SortDirection}`;

interface IUseDiscoverShowsOptions {
  sortBy?: TVSortBy;
}

const useShows = ({ sortBy }: IUseDiscoverShowsOptions) => {
  const [shows, setShows] = useState<IMediaSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showsIsLoading, setShowsIsLoading] = useState(true);
  const [showsError, setShowsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      setShowsIsLoading(true);
      setShowsError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<ITVShowSummary>>(
          "/discover/tv",
          {
            params: {
              sort_by: sortBy,
              "first_air_date.lte": new Date().toISOString().split("T")[0],
              page,
            },
          },
        );

        const showsWithType = response.data.results.map((show) => ({
          ...show,
          media_type: "tv" as const,
        }));

        setShows((prev) => [...prev, ...showsWithType]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setShowsError(getErrorMessage(error));
      } finally {
        setShowsIsLoading(false);
      }
    };

    fetchShows();
  }, [page, sortBy]);

  const loadMoreShows = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreShows = page < totalPages;

  return { shows, showsIsLoading, showsError, loadMoreShows, hasMoreShows };
};

export default useShows;
