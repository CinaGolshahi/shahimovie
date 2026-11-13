import { useParams } from "react-router-dom";
import { MediaCardLoader } from "../../components/shared/media-card";
import { WideMediaCard } from "../../components/shared/wide-media-card";
import Breadcrumb from "../../components/ui/breadcrumb";
import { useSearch } from "../../hooks";

const SearchPage = () => {
  const { search } = useParams<{ search: string }>();
  const {
    searchResults,
    hasMoreSearchResult,
    searchResultsIsLoading,
    loadMoreSearchResults,
  } = useSearch(search);

  return (
    <div className="container mx-auto flex flex-col gap-2 p-2 pt-6 xl:-mt-4 xl:px-8 xl:pt-0">
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Search" },
          { label: `${search}` },
        ]}
      />
      {searchResultsIsLoading && searchResults.length === 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 10 }, (_, index) => (
            <MediaCardLoader key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {searchResults.map((movie) => (
              <WideMediaCard key={movie.id} media={movie} />
            ))}
          </div>
          {hasMoreSearchResult && (
            <button
              onClick={loadMoreSearchResults}
              disabled={searchResultsIsLoading}
              className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
            >
              {searchResultsIsLoading ? "Loading..." : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
