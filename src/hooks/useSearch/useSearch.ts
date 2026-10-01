import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/movies";

const useSearch = (query: string | undefined | null) => {
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  useEffect(() => {
    if (!query) return;

    const fetchSearch = async () => {
      try {
        const response = await tmdbApi.get<IPaginatedResponse>(
          "/search/movie",
          {
            params: { query: `${query}` },
          },
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearch();
  }, [query]);

  return { searchResults };
};

export default useSearch;
