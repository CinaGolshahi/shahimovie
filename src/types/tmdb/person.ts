import type { IKnownForMovie, IKnownForTV } from "./media";

export interface IPersonBase {
  adult: boolean;
  gender: 0 | 1 | 2 | 3;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
}

export interface IPerson extends IPersonBase {
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  homepage: string | null;
  imdb_id: string | null;
  place_of_birth: string | null;
}

export interface IPersonSummary extends IPersonBase {
  original_name: string;
  known_for: TKnownFor[];
}

export type TKnownFor = IKnownForMovie | IKnownForTV;

export interface IPersonCombinedCredits {
  id: number;
  cast: TCombinedCast[];
  crew: TCombinedCrew[];
}

export interface ICombinedCastMovie extends IKnownForMovie {
  character: string;
  credit_id: string;
  order: number;
}

export interface ICombinedCastTV extends IKnownForTV {
  character: string;
  credit_id: string;
  episode_count: number;
}

export interface ICombinedCrewMovie extends IKnownForMovie {
  credit_id: string;
  department: string;
  job: string;
}

export interface ICombinedCrewTV extends IKnownForTV {
  credit_id: string;
  department: string;
  job: string;
  episode_count: number;
}

export type TCombinedCast = ICombinedCastMovie | ICombinedCastTV;
export type TCombinedCrew = ICombinedCrewMovie | ICombinedCrewTV;
