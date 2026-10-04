import type { IMovie, ITVShow } from "../../../types/tmdb";

interface IMediaSection {
  title: string;
  link: string;
  movie?: IMovie[] | undefined | null;
  show?: ITVShow[] | undefined | null;
}

export type { IMediaSection };
