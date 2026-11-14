import { startTransition, useEffect, useState, ViewTransition } from "react";
import { createPortal } from "react-dom";
import { useSearch } from "../../../hooks";
import SearchForm from "./SearchForm";
import type { ISearchModal } from "./SearchModal.type";
import SearchResults from "./SearchResults";

const SearchModal = ({ toggleSearch }: ISearchModal) => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

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
            toggleSearch(false);
          });
        }}
        onKeyDown={(event) => {
          event.key === "Escape" &&
            (event.preventDefault(),
            startTransition(() => {
              toggleSearch(false);
            }));
        }}
        className="fixed inset-0 z-30 bg-gray-950 px-4 pt-10 md:pt-6"
      >
        <div className="mx-auto flex flex-col items-center gap-4 md:w-2/3 2xl:w-1/3">
          <SearchForm
            searchResultsIsLoading={searchResultsIsLoading}
            toggleSearch={toggleSearch}
            query={query}
            setQuery={setQuery}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          {searchResults && (
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
