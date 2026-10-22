import type { IMovie, ITVShow } from "../../../types/tmdb";

interface IMoviesSection {
  title: string;
  link?: string;
  loading: boolean;
  movies: IMovie[];
}

interface IShowsSection {
  title: string;
  link?: string;
  loading: boolean;
  shows: ITVShow[];
}

export type { IMoviesSection, IShowsSection };
