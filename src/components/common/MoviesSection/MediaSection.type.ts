import type { MovieSortBy } from "../../../hooks/useMovies";
import type { TVSortBy } from "../../../hooks/useShows";

interface IMoviesSection {
  title: string;
  link: string;
  sort?: MovieSortBy;
}

interface IShowsSection {
  title: string;
  link: string;
  sort?: TVSortBy;
}

export type { IMoviesSection, IShowsSection };
