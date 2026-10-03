import type { IMovie } from "../../../types/tmdb";

interface IMediaSection {
  title: string;
  link: string;
  media: IMovie[] | undefined | null;
}

export type { IMediaSection };
