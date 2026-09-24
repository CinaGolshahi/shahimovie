interface IOMDbRating {
  Source: string;
  Value: string;
}

interface IOMDbResponse {
  Rated: string;
  Ratings: IOMDbRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Response: "True" | "False";
  Error?: string;
}

export type { IOMDbRating, IOMDbResponse };
