import { useParams } from "react-router-dom";
import MovieCard from "../../components/shared/movie-card";
import useSearch from "../../hooks/useSearch";

const SearchResultsPage = () => {
  const { search } = useParams<{ search: string }>();
  const {
    searchResults,
    hasMoreSearchResult,
    isLoadingSearchResults,
    loadMoreSearchResults,
  } = useSearch(search);

  return (
    <div className="container mx-auto flex flex-col gap-4 px-4">
      <div className="grid min-h-screen grid-cols-5 gap-4">
        {searchResults.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
      {hasMoreSearchResult && (
        <button
          onClick={loadMoreSearchResults}
          disabled={isLoadingSearchResults}
          className="w-full cursor-pointer rounded-xl bg-blue-500 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
        >
          {isLoadingSearchResults ? "Loading..." : "See More"}
        </button>
      )}
    </div>
  );
};

export default SearchResultsPage;
