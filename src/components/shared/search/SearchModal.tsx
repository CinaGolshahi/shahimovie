import { ChevronRight, ImageOff, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../../../hooks";
import { getTmdbImageUrl, getYearFromDate } from "../../../utils";
import type { ISearchModal } from "./SearchModal.type";

const SearchModal = ({ closeModal }: ISearchModal) => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const { searchResults } = useSearch(query);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchValue.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const clearSearch = () => {
    setSearchValue("");
    setQuery("");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-30 flex flex-col items-center gap-4 bg-gray-950/80 px-4 pt-10 backdrop-blur-lg *:w-full xl:pt-36 xl:*:w-1/3"
    >
      <form
        onClick={(event) => event.stopPropagation()}
        className="flex items-center gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (query && searchValue) {
            navigate(`/search/${encodeURIComponent(query)}`);
            closeModal?.();
          }
        }}
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
            className="w-full rounded-full bg-gray-950/80 p-4 outline-2 outline-gray-900 transition-all duration-300 focus:outline-blue-600"
          />
          <button
            type="button"
            onClick={clearSearch}
            className={`group invisible absolute inset-e-3 cursor-pointer rounded-full p-1 opacity-0 transition-all duration-300 ${searchValue && "visible opacity-100"}`}
          >
            <X className="size-5 stroke-gray-400 transition-all duration-300 group-hover:stroke-gray-50" />
          </button>
        </div>
        <div className="aspect-square h-full">
          <button
            type="submit"
            className="flex size-full cursor-pointer items-center justify-center rounded-full bg-gray-950/80 outline-2 outline-blue-600 transition-all delay-75 duration-300 hover:bg-blue-600"
          >
            <Search />
          </button>
        </div>
      </form>

      {searchResults && searchValue && (
        <div className="divide-y divide-gray-800 rounded-2xl bg-gray-950 outline-2 outline-gray-900 *:not-last:h-40 *:not-last:p-2">
          {searchResults.slice(0, 3).map((item) => (
            <div key={item.id}>
              {item.media_type === "movie" && (
                <Link
                  to={`/movie/${item.id}`}
                  className="flex h-full gap-4 rounded-xl p-2 transition-all delay-75 duration-300 hover:bg-gray-900"
                >
                  {item.poster_path ? (
                    <img
                      src={`${getTmdbImageUrl(item.poster_path, "w500")}`}
                      alt=""
                      className="aspect-2/3 h-full rounded-lg object-cover outline outline-gray-900"
                    />
                  ) : (
                    <div className="flex aspect-2/3 h-full items-center justify-center rounded-lg outline outline-gray-900">
                      <ImageOff className="stroke-gray-500" />
                    </div>
                  )}
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
              )}
              {item.media_type === "tv" && (
                <Link
                  to={`/show/${item.id}`}
                  className="flex h-full gap-4 rounded-xl p-2 transition-all delay-75 duration-300 hover:bg-gray-900"
                >
                  {item.poster_path ? (
                    <img
                      src={`${getTmdbImageUrl(item.poster_path, "w500")}`}
                      alt=""
                      className="aspect-2/3 h-full rounded-lg object-cover outline outline-gray-900"
                    />
                  ) : (
                    <div className="flex aspect-2/3 h-full items-center justify-center rounded-lg outline outline-gray-900">
                      <ImageOff className="stroke-gray-500" />
                    </div>
                  )}
                  <div>
                    <p>
                      <span className="font-bold">{item.name}</span>
                      <span>{` (${getYearFromDate(item.first_air_date)})`}</span>
                    </p>
                    <p className="line-clamp-3 pe-10 pt-2 text-gray-400">
                      {item.overview ?? "Unknown"}
                    </p>
                  </div>
                </Link>
              )}
              {item.media_type === "person" && (
                <Link
                  to={`/artist/${item.id}`}
                  className="flex h-full gap-4 rounded-xl p-2 transition-all delay-75 duration-300 hover:bg-gray-900"
                >
                  {item.profile_path ? (
                    <img
                      src={`${getTmdbImageUrl(item.profile_path, "w500")}`}
                      alt=""
                      className="aspect-2/3 h-full rounded-lg object-cover outline outline-gray-900"
                    />
                  ) : (
                    <div className="flex aspect-2/3 h-full items-center justify-center rounded-lg outline outline-gray-900">
                      <ImageOff className="stroke-gray-500" />
                    </div>
                  )}
                  <div>
                    <p>
                      <span className="font-bold">{item.name}</span>
                    </p>
                    <p className="line-clamp-3 pe-10 pt-2 text-gray-400">
                      {item.known_for_department ?? "Unknown"}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}
          <Link
            to={`/search/${query}`}
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
