import type { IMovie, ITVShow } from "../../../types/tmdb";

interface IMoviesSection {
  title: string;
  link?: string;
  movies: IMovie[];
}

interface IShowsSection {
  title: string;
  link: string;
  shows: ITVShow[];
}

export type { IMoviesSection, IShowsSection };
