import { useEffect, useState } from "react";
import omdbApi from "../../services/omdb";
import type { IOMDbResponse } from "../../types/omdb";
import useExternalIds from "../useExternalIds";

const useScores = (type: "movie" | "tv", id: string | null | undefined) => {
  const [scores, setScore] = useState<IOMDbResponse>();
  const [scoresIsLoading, setScoreIsLoading] = useState(true);
  const { externalIds } = useExternalIds(type, id ?? "");

  useEffect(() => {
    const fetchScores = async () => {
      if (!externalIds) return "N/A";

      setScoreIsLoading(true);
      try {
        const response = await omdbApi.get("/", {
          params: { i: externalIds.imdb_id },
        });
        setScore(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setScoreIsLoading(false);
      }
    };

    fetchScores();
  }, [externalIds]);

  return { scores, scoresIsLoading };
};

export default useScores;
