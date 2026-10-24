import type { IMediaSummary } from "../../../types/tmdb";

interface IMediaSection {
  title: string;
  link?: string;
  loading: boolean;
  media: IMediaSummary[];
}

export type { IMediaSection };
