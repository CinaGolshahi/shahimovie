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
  runtime: number | null;
  budget: number;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: IGenre[];
  spoken_languages: ILanguage[];
  production_countries: ICountry[];
}

interface IGenre {
  id: number;
  name: string;
}

interface ILanguage {
  name: string;
}
interface ICountry {
  name: string;
}

interface IPaginatedResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export type { IGenre, IMovie, IPaginatedResponse };
