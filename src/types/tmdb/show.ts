import type {
  IGenre,
  IProductionCompany,
  IProductionCountry,
  ISpokenLanguage,
} from "./common";
import type { ICreatedBy, ICredits, ICrewMember, IGuestStar } from "./credits";
import type { IMediaSummary } from "./media";

export interface IEpisode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

export interface INetwork {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ISeason {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface ISeasonEpisode extends IEpisode {
  crew: ICrewMember[];
  guest_stars: IGuestStar[];
}

export interface ISeasonDetails {
  _id: string;
  air_date: string | null;
  episodes: ISeasonEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface ITVShow {
  adult: boolean;
  backdrop_path: string | null;
  created_by: ICreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpisode | null;
  name: string;
  next_episode_to_air: IEpisode | null;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  seasons: ISeason[];
  softcore: boolean;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ITVShowSummary {
  adult: boolean;
  backdrop_path: string | null;
  // genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export type ITVShowWithExtras = ITVShow & {
  aggregate_credits: ICredits;
  external_ids: import("./common").IExternalIds;
  recommendations: import("./common").IPaginatedResponse<IMediaSummary>;
};
