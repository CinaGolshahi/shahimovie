import { Search } from "lucide-react";
import type { ISearchModal } from "./SearchModal.type";

const SearchTrigger = ({ openModal }: ISearchModal) => {
  return (
    <button
      onClick={openModal}
      className="cursor-pointer rounded-full p-2 transition-all delay-75 duration-300 hover:bg-gray-50/10"
    >
      <Search className="size-5" />
    </button>
  );
};

export default SearchTrigger;
