import type { IMovieSummary } from "./movie";
import type { IPersonSummary } from "./person";
import type { ITVShowSummary } from "./show";

export type IMediaSummary =
  | (IMovieSummary & { media_type: "movie" })
  | (ITVShowSummary & { media_type: "tv" })
  | (IPersonSummary & { media_type: "person" });

export interface IKnownForBase {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface IKnownForMovie extends IKnownForBase {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}

export interface IKnownForTV extends IKnownForBase {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}
