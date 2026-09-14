interface IMovie {
  id: number;
  title: string;
  original_language: string;
  overview: string;
  status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
  release_date: string;
  runtime: number | null;
  budget: number;
  poster_path: string | null;
  backdrop_path: string | null;
}

interface IResponseTrendingMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export type { IMovie, IResponseTrendingMovies };
