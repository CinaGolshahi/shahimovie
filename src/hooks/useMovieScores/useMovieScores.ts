import { useEffect, useState } from "react";
import omdbApi from "../../services/omdb";
import type { IOMDbResponse } from "../../types/omdb";

const useMovieScores = (imdbId: string | null | undefined) => {
  const [movieScores, setMovieScore] = useState<IOMDbResponse>();
  const [movieScoresIsLoading, setMovieScoreIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieScores = async () => {
      if (!imdbId) return "N/A";
      
      setMovieScoreIsLoading(true);
      try {
        const response = await omdbApi.get("/", {
          params: { i: imdbId },
        });
        setMovieScore(response.data);
        setMovieScoreIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setMovieScoreIsLoading(false);
      }
    };

    fetchMovieScores();
  }, [imdbId]);

  return { movieScores, movieScoresIsLoading };
};

export default useMovieScores;
