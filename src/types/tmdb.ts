interface IPaginatedResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IGenre {
  id: number;
  name: string;
}
interface ILanguage {
  name: string;
  english_name: string;
}
interface ICountry {
  name: string;
}

interface ITVEpisode {
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

interface ITVSeasonSummary {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

interface IMovie {
  id: number;
  title: string;
  overview: string;
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  release_date: string;
  tagline: string;
  imdb_id: string;
  runtime: number | null;
  budget: number;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: IGenre[];
  spoken_languages: ILanguage[];
  production_countries: ICountry[];
}
interface IMovieCredits {
  id: number;
  cast: ICastMember[];
  crew: ICrewMember[];
}

interface ITVShow {
  adult: boolean;
  backdrop_path: string | null;
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  id: number;
  in_production: boolean;
  last_air_date: string | null;
  last_episode_to_air: ITVEpisode | null;
  name: string;
  next_episode_to_air: ITVEpisode | null;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_countries: ICountry[];
  seasons: ITVSeasonSummary[];
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface ICastMember {
  adult: boolean;
  gender: number | null;
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
  gender: number | null;
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

export type {
  ICastMember,
  ICountry,
  ICrewMember,
  IGenre,
  ILanguage,
  IMovie,
  IMovieCredits,
  IPaginatedResponse,
  ITVEpisode,
  ITVSeasonSummary,
  ITVShow,
};
