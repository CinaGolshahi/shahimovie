import { useParams } from "react-router-dom";
import { MediaCard } from "../../components/shared/media-card";
import { useSearch } from "../../hooks";

const SearchPage = () => {
  const { search } = useParams<{ search: string }>();
  const {
    searchResults,
    hasMoreSearchResult,
    isLoadingSearchResults,
    loadMoreSearchResults,
  } = useSearch(search);

  return (
    <div className="container mx-auto flex flex-col gap-4 px-4">
      <div className="grid min-h-screen grid-cols-2 gap-4 xl:grid-cols-5">
        {searchResults.map((item) => (
          <>
            {item.media_type === "movie" && (
              <MediaCard key={item.id} media={item} />
            )}
            {item.media_type === "tv" && (
              <MediaCard key={item.id} media={item} />
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
  );
};

export default SearchPage;
