import { Search } from "lucide-react";
import { createPortal } from "react-dom";
import type { ISearchModal } from "./SearchModal.type";

const SearchModal = ({ closeModal }: ISearchModal) => {
  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex flex-col items-center bg-gray-950/80 pt-36 backdrop-blur-lg"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex w-1/3 justify-center gap-2 *:rounded-full *:bg-gray-950 *:outline-2 *:outline-gray-900 *:transition-all *:duration-300"
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
    </div>,
    document.body,
  );
};

export default SearchModal;
