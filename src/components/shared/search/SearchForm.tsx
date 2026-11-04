import { Loader, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ISearchFormProps } from "./SearchModal.type";

const SearchForm = (props: ISearchFormProps) => {
  const {
    toggleSearch,
    searchResultsIsLoading,
    query,
    searchValue,
    setQuery,
    setSearchValue,
    className,
  } = props;

  const navigate = useNavigate();

  const clearSearch = () => {
    setSearchValue("");
    setQuery("");
  };

  return (
    <form
      onClick={(event) => event.stopPropagation()}
      onSubmit={(event) => {
        event.preventDefault();
        if (query && searchValue) {
          navigate(`/search/${encodeURIComponent(query)}`);
          toggleSearch((prev) => !prev);
        }
      }}
      className={`${className} flex h-16 w-full gap-4`}
    >
      <div className="relative flex w-full items-center">
        <input
          autoFocus
          type="text"
          name="searchBox"
          id="searchBox"
          inputMode="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="size-full rounded-full ps-4 outline-2 outline-gray-900 transition-all duration-300 focus:outline-blue-600"
        />
        <div className="absolute inset-e-4 flex">
          {searchResultsIsLoading && searchValue ? (
            <Loader className="animate-spin stroke-blue-600" />
          ) : (
            <button
              type="button"
              onClick={clearSearch}
              className={`cursor-pointer *:stroke-gray-500 ${searchValue && "visible opacity-100"} `}
            >
              <X />
            </button>
          )}
        </div>
      </div>
      <div className="aspect-square h-full">
        <button
          type="submit"
          disabled={!query}
          className="flex size-full cursor-pointer items-center justify-center rounded-full outline-2 outline-blue-600 transition-all delay-75 duration-300 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-transparent disabled:outline-gray-900"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
