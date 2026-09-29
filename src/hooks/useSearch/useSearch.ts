import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie, IPaginatedResponse } from "../../types/movies";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await tmdbApi.get<IPaginatedResponse>(
          "/search/movie",
          {
            params: { query: `Avengers` },
          },
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearch();
  }, []);

  return { searchResults };
};

export default useSearch;
