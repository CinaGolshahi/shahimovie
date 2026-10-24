import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  IMediaSummary,
  IPaginatedResponse,
  IPersonSummary,
} from "../../types/tmdb";

const usePopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState<IMediaSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [popularPeopleIsLoading, setPopularPeopleIsLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      setPopularPeopleIsLoading(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IPersonSummary>>(
          "/discover/movie",
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
    loadMorePopularPeople,
    hasMorePopularPeople,
  };
};

export default usePopularPeople;
