import type { MovieSortBy } from "../../../hooks/useMovies";
import type { IMovie, ITVShow } from "../../../types/tmdb";

interface IMediaSection {
  title: string;
  link: string;
  type: "movie" | "show";
  sort?: MovieSortBy;
  movie?: IMovie[] | undefined | null;
  show?: ITVShow[] | undefined | null;
}

export type { IMediaSection };
