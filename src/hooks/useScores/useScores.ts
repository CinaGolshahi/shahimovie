import { useEffect, useState } from "react";
import omdbApi from "../../services/omdb";
import type { IOMDbResponse } from "../../types/omdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUseScores {
  imdbId: string | undefined;
}

const useScores = (props: IUseScores) => {
  const { imdbId } = props;

  const [scores, setScores] = useState<IOMDbResponse>();
  const [scoresIsLoading, setScoresIsLoading] = useState(true);
  const [scoresError, setScoresError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      setScoresIsLoading(true);
      setScoresError(null);
      try {
        const response = await omdbApi.get<IOMDbResponse>("/", {
          params: { i: imdbId },
        });
        setScores(response.data);
      } catch (error) {
        setScoresError(getErrorMessage(error));
      } finally {
        setScoresIsLoading(false);
      }
    };

    fetchScores();
  }, [imdbId]);

  return { scores, scoresIsLoading, scoresError };
};

export default useScores;
