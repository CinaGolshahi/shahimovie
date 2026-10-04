import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPaginatedResponse, ITVShow } from "../../types/tmdb";

type TvSortField = "popularity" | "first_air_date" | "original_name";
type SortDirection = "asc" | "desc";
export type TVSortBy = `${TvSortField}.${SortDirection}`;

interface IUseDiscoverShowsOptions {
  sortBy?: TVSortBy;
}

const useShows = ({ sortBy }: IUseDiscoverShowsOptions) => {
  const [shows, setShows] = useState<ITVShow[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showsIsLoading, setShowsIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchShows = async () => {
      setShowsIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<ITVShow>>(
          "/discover/tv",
          {
            params: {
              sort_by: sortBy,
              "first_air_date.lte": new Date().toISOString().split("T")[0],
              page,
            },
          },
        );
        setShows((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
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

  return { shows, showsIsLoading, loadMoreShows, hasMoreShows };
};

export default useShows;
