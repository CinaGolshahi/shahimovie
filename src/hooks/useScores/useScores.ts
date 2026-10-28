import { useEffect, useState } from "react";
import omdbApi from "../../services/omdb";
import type { IOMDbResponse } from "../../types/omdb";
import getErrorMessage from "../../utils/get-error-message";
import useExternalIds from "../useExternalIds";

const useScores = (type: "movie" | "tv", id: string | null | undefined) => {
  const { externalIds } = useExternalIds(type, id ?? "");
  const [scores, setScore] = useState<IOMDbResponse>();
  const [scoresIsLoading, setScoreIsLoading] = useState(true);
  const [scoresError, setScoreError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      if (!externalIds) return "N/A";

      setScoreIsLoading(true);
      setScoreError(null);
      try {
        const response = await omdbApi.get("/", {
          params: { i: externalIds.imdb_id },
        });
        setScore(response.data);
      } catch (error) {
        setScoreError(getErrorMessage(error));
      } finally {
        setScoreIsLoading(false);
      }
    };

    fetchScores();
  }, [externalIds]);

  return { scores, scoresIsLoading, scoresError };
};

export default useScores;
