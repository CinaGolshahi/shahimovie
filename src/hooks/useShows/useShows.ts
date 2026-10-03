import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPaginatedResponse, ITVShow } from "../../types/tmdb";

const useShows = () => {
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
          { params: { page } },
        );
        setShows((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } finally {
        setShowsIsLoading(false);
      }
    };

    fetchShows();
  }, [page]);

  const showsLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMore = page < totalPages;

  return { shows, showsIsLoading, showsLoadMore, hasMore };
};

export default useShows;
