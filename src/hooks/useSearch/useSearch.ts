import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/movies";

const useSearch = (query: string | undefined | null) => {
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoadingSearchResults, setIsLoadingSearchResults] =
    useState<boolean>(true);

  useEffect(() => {
    if (!query) return;

    const fetchSearch = async () => {
      setIsLoadingSearchResults(true);
      try {
        const response = await tmdbApi.get<IPaginatedResponse>(
          "/search/movie",
          {
            params: { query: `${query}`, page },
          },
        );
        setSearchResults((prev) => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
        setIsLoadingSearchResults(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingSearchResults(false);
      }
    };

    fetchSearch();
  }, [query, page]);

  const loadMoreSearchResults = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreSearchResult = page < totalPage;

  return {
    searchResults,
    loadMoreSearchResults,
    hasMoreSearchResult,
    isLoadingSearchResults,
  };
};

export default useSearch;
