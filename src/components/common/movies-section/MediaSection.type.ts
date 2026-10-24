import type { IMovieSummary, ITVShow } from "../../../types/tmdb";

interface IMoviesSection {
  title: string;
  link?: string;
  loading: boolean;
  movies: IMovieSummary[];
}

interface IShowsSection {
  title: string;
  link?: string;
  loading: boolean;
  shows: ITVShow[];
}

export type { IMoviesSection, IShowsSection };
