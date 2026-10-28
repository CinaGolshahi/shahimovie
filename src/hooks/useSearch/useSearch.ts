import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMediaSummary, IPaginatedResponse } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

const useSearch = (query: string | undefined | null) => {
  const [searchResults, setSearchResults] = useState<IMediaSummary[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchResultsIsLoading, setSearchResultsIsLoading] = useState(true);
  const [searchResultsError, setSearchResultsError] = useState<string | null>(
    null,
  );
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
        setSearchResultsIsLoading(false);
        return;
      }

      setSearchResultsIsLoading(true);
      setSearchResultsError(null);
      try {
        const response = await tmdbApi.get<IPaginatedResponse<IMediaSummary>>(
          "/search/multi",
          {
            params: { query: `${query}`, page },
          },
        );
        setSearchResults((prev) => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        setSearchResultsError(getErrorMessage(error));
      } finally {
        setSearchResultsIsLoading(false);
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
    searchResultsIsLoading,
    searchResultsError,
    loadMoreSearchResults,
    hasMoreSearchResult,
  };
};

export default useSearch;
