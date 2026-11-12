import { Search } from "lucide-react";
import { startTransition } from "react";
import type { ISearchModal } from "./SearchModal.type";

const SearchTrigger = ({ toggleSearch }: ISearchModal) => {
  return (
    <div className="flex items-center gap-1 rounded-full xl:bg-gray-50/10 xl:ps-2">
      <span className="hidden rounded-full bg-gray-50/10 px-1.5 py-0.5 text-xs outline-1 outline-gray-50/30 select-none xl:inline">
        Ctrl + K
      </span>
      <button
        onClick={() => {
          startTransition(() => {
            toggleSearch((prev) => !prev);
          });
        }}
        className="cursor-pointer rounded-full p-2 transition-all delay-75 duration-300 hover:bg-gray-50/10"
      >
        <Search className="size-5" />
      </button>
    </div>
  );
};

export default SearchTrigger;
