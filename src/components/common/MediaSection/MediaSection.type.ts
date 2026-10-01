import type { IMovie } from "../../../types/movies";

interface IMediaSection {
  title: string;
  link: string;
  media: IMovie[] | undefined | null;
}

export type { IMediaSection };
