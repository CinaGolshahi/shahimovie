import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";
import { getTmdbImageUrl, getYearFromDate } from "../../../utils";
import type { ISearchModal } from "./SearchModal.type";

const SearchModal = ({ closeModal }: ISearchModal) => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const { searchResults } = useSearch(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-30 flex flex-col items-center gap-4 bg-gray-950/80 px-4 pt-10 backdrop-blur-lg *:w-full xl:pt-36 xl:*:w-1/3"
    >
      <input
        autoFocus
        type="text"
        name="searchBox"
        id="searchBox"
        inputMode="search"
        placeholder="Search..."
        value={searchValue}
        onClick={(event) => event.stopPropagation()}
        onChange={(event) => setSearchValue(event.target.value)}
        className="w-full rounded-full bg-gray-950/80 p-4 outline-2 outline-gray-900 transition-all duration-300 focus:outline-blue-600"
      />
      {searchValue && searchResults && (
        <div className="divide-y divide-gray-800 rounded-2xl bg-gray-950 outline-2 outline-gray-900 *:not-last:h-40 *:not-last:p-2">
          {searchResults.slice(0, 3).map((item, index) => (
            <div key={index}>
              <Link
                to={`/movie/${item.id}`}
                className="flex h-full gap-4 rounded-xl p-2 transition-all delay-75 duration-300 hover:bg-gray-900"
              >
                <img
                  src={`${getTmdbImageUrl(item.poster_path, "w500")}`}
                  alt=""
                  className="aspect-2/3 h-full rounded-lg object-cover outline outline-gray-900"
                />
                <div>
                  <p>
                    <span className="font-bold">{item.title}</span>
                    <span>{` (${getYearFromDate(item.release_date)})`}</span>
                  </p>
                  <p className="line-clamp-3 pe-10 pt-2 text-gray-400">
                    {item.overview ?? "Unknown"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
          <Link
            to={`/search/${searchValue}`}
            className="flex items-center justify-center px-4 py-2 transition-all delay-75 duration-300 hover:text-blue-500"
          >
            <span>Find more</span>
            <ChevronRight className="mt-0.5 size-5" />
          </Link>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default SearchModal;
