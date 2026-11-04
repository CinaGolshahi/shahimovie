import type { Dispatch, SetStateAction } from "react";
import type { IMediaSummary } from "../../../types/tmdb";

interface ISearchModal {
  toggleSearch: Dispatch<SetStateAction<boolean>>;
}

interface ISearchFormProps {
  searchResultsIsLoading: boolean;
  toggleSearch: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  className?: string;
}

interface ISearchResultsProps {
  searchResults: IMediaSummary[];
  searchResultsIsLoading: boolean;
  query: string;
  className?: string;
}

export type { ISearchFormProps, ISearchModal, ISearchResultsProps };
