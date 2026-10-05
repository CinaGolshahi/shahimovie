import { useParams } from "react-router-dom";
import MovieCard from "../../components/shared/movie-card";
import SearchModal from "../../components/shared/Search/SearchModal";
import ShowCard from "../../components/shared/show-card";
import useSearch from "../../hooks/useSearch";

const SearchPage = () => {
  const { search } = useParams<{ search: string }>();
  const {
    searchResults,
    hasMoreSearchResult,
    isLoadingSearchResults,
    loadMoreSearchResults,
  } = useSearch(search);

  return (
    <>
      {search ? (
        <div className="container mx-auto flex flex-col gap-4 px-4">
          <div className="grid min-h-screen grid-cols-2 gap-4 xl:grid-cols-5">
            {searchResults.map((item, index) => (
              <>
                {item.media_type === "movie" && (
                  <MovieCard key={index} movie={item} />
                )}
                {item.media_type === "tv" && (
                  <ShowCard key={index} show={item} />
                )}
              </>
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
      ) : (
        <div className="h-screen">
          <SearchModal />
        </div>
      )}
    </>
  );
};

export default SearchPage;
