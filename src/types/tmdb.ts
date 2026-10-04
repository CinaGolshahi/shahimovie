interface IPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface IBelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface IGenre {
  id: number;
  name: string;
}
interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}
interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IMovie {
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

interface ICastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
interface ICrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}
interface IMovieCredits {
  id: number;
  cast: ICastMember[];
  crew: ICrewMember[];
}

interface ICreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

interface IEpisode {
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
interface INetwork {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
interface ISeason {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

interface ITVShow {
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

export type { IMovie, IMovieCredits, IPaginatedResponse, ITVShow };
