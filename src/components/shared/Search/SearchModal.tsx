import { Search } from "lucide-react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import type { ISearchModal } from "./SearchModal.type";

const SearchModal = ({ closeModal }: ISearchModal) => {
  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex flex-col items-center gap-4 bg-gray-950/80 pt-36 backdrop-blur-lg *:w-1/3"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex justify-center gap-2 *:rounded-full *:bg-gray-950/80 *:outline-2 *:outline-gray-900 *:transition-all *:duration-300"
      >
        <input
          autoFocus
          type="text"
          name="searchBox"
          id="searchBox"
          inputMode="search"
          placeholder="Search..."
          className="w-full p-4 focus:outline-blue-600"
        />
        <button className="flex aspect-square h-full cursor-pointer place-content-center items-center delay-75 hover:outline-blue-600">
          <Search />
        </button>
      </div>
      <div className="divide-y divide-gray-800 rounded-2xl bg-gray-950 outline-2 outline-gray-900 *:h-40 *:p-2">
        <div>
          <Link
            to={"/"}
            className="flex h-full gap-4 rounded-xl p-2 transition-all delay-75 duration-300 hover:bg-gray-900"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
              alt=""
              className="aspect-2/3 h-full rounded-lg object-cover outline outline-gray-900"
            />
            <div>
              <p>
                <span className="font-bold">Avengers: Endgame</span>
                <span>(2019)</span>
              </p>
              <p className="line-clamp-3 pe-10 pt-2 text-gray-400">
                After the devastating events of Avengers: Infinity War, the
                universe is in ruins due to the efforts of the Mad Titan,
                Thanos. With the help of remaining allies, the Avengers must
                assemble once more in order to undo Thanos' actions and restore
                order to the universe once and for all, no matter what
                consequences may be in store.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default SearchModal;
