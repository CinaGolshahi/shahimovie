import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  IMediaSummary,
  IPaginatedResponse,
  IPersonSummary,
} from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

const usePopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState<IMediaSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [popularPeopleIsLoading, setPopularPeopleIsLoading] = useState(true);
  const [popularPeopleError, setPopularPeopleError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchPopularPeople = async () => {
      setPopularPeopleIsLoading(true);
      setPopularPeopleError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IPersonSummary>>(
          "/person/popular",
          {
            params: {
              page,
            },
          },
        );
        const popularPeopleWithType = response.data.results.map((person) => ({
          ...person,
          media_type: "person" as const,
        }));

        setPopularPeople((prev) => [...prev, ...popularPeopleWithType]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setPopularPeopleError(getErrorMessage(error));
      } finally {
        setPopularPeopleIsLoading(false);
      }
    };

    fetchPopularPeople();
  }, [page]);

  const loadMorePopularPeople = () => {
    setPage((prev) => prev + 1);
  };

  const hasMorePopularPeople = page < totalPages;

  return {
    popularPeople,
    popularPeopleIsLoading,
    popularPeopleError,
    loadMorePopularPeople,
    hasMorePopularPeople,
  };
};

export default usePopularPeople;
