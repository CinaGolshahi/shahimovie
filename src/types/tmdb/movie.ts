import type { IGenre, IProductionCompany, IProductionCountry, ISpokenLanguage } from "./common";
import type { ICredits } from "./credits";
import type { IMediaSummary } from "./media";

export interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBelongsToCollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieSummary {
  adult: boolean;
  backdrop_path: string | null;
  // genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type IMovieWithExtras = IMovie & {
  credits: ICredits;
  external_ids: import("./common").IExternalIds;
  recommendations: import("./common").IPaginatedResponse<IMediaSummary>;
};
