import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WideMediaCard } from "../wide-media-card";
import type { ISearchResultsProps } from "./SearchModal.type";

const SearchResults = (props: ISearchResultsProps) => {
  const { searchResults, query } = props;
  return (
    <div className="flex w-full flex-col gap-2 rounded-3xl bg-gray-950 p-2 outline-2 outline-gray-900">
      {searchResults.slice(0, 3).map((result) => (
        <WideMediaCard media={result} key={result.id} />
      ))}

      <Link
        to={`/search/${query}`}
        className="flex items-center justify-center px-4 py-2 transition-all delay-75 duration-300 hover:text-blue-500"
      >
        <span>Find more</span>
        <ChevronRight className="mt-0.5 size-5" />
      </Link>
    </div>
  );
};

export default SearchResults;
