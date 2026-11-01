import type { Dispatch, SetStateAction } from "react";

interface ISearchModal {
  toggleSearch: Dispatch<SetStateAction<boolean>>;
}

export type { ISearchModal };
