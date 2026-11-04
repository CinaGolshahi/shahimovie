import { startTransition, useEffect, useState, ViewTransition } from "react";
import { createPortal } from "react-dom";
import { useSearch } from "../../../hooks";
import SearchForm from "./SearchForm";
import type { ISearchModal } from "./SearchModal.type";
import SearchResults from "./SearchResults";

const SearchModal = ({ toggleSearch }: ISearchModal) => {
  const [searchValue, setSearchValue] = useState("silo");
  const [query, setQuery] = useState("silo");

  const { searchResults, searchResultsIsLoading } = useSearch(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchValue.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <ViewTransition>
      <div
        onClick={() => {
          startTransition(() => {
            toggleSearch((prev) => !prev);
          });
        }}
        className="fixed inset-0 z-30 bg-gray-950 px-4 pt-10"
      >
        <div className="xl:w-1/3 mx-auto flex flex-col items-center gap-4">
          <SearchForm
            searchResultsIsLoading={searchResultsIsLoading}
            toggleSearch={toggleSearch}
            query={query}
            setQuery={setQuery}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          {!searchResultsIsLoading && searchResults.length > 0 && (
            <SearchResults
              query={query}
              searchResults={searchResults}
              searchResultsIsLoading={searchResultsIsLoading}
            />
          )}
        </div>
      </div>
    </ViewTransition>,
    document.body,
  );
};

export default SearchModal;
