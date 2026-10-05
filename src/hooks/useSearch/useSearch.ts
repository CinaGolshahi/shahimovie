import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMultiSearchResult, IPaginatedResponse } from "../../types/tmdb";

const useSearch = (query: string | undefined | null) => {
  const [searchResults, setSearchResults] = useState<IMultiSearchResult[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoadingSearchResults, setIsLoadingSearchResults] =
    useState<boolean>(true);
  const [prevQuery, setPrevQuery] = useState(query);

  if (query !== prevQuery) {
    setPrevQuery(query);
    setSearchResults([]);
    setPage(1);
    setTotalPage(1);
  }

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) {
        setIsLoadingSearchResults(false);
        return;
      }

      setIsLoadingSearchResults(true);
      try {
        const response = await tmdbApi.get<
          IPaginatedResponse<IMultiSearchResult>
        >("/search/multi", {
          params: { query: `${query}`, page },
        });
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
