import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { ISeasonDetails } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUseSeason {
  id: string;
  seasonNumber: number;
}

const useSeason = (props: IUseSeason) => {
  const { id, seasonNumber } = props;
  const [season, setSeason] = useState<ISeasonDetails>();
  const [seasonIsLoading, setSeasonIsLoading] = useState(true);
  const [seasonError, setSeasonError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeason = async () => {
      setSeasonIsLoading(true);
      setSeasonError(null);
      try {
        const response = await tmdbApi.get(`/tv/${id}/season/${seasonNumber}`);
        setSeason(response.data);
        setSeasonIsLoading(false);
      } catch (error) {
        setSeasonError(getErrorMessage(error));
      } finally {
        setSeasonIsLoading(false);
      }
    };

    fetchSeason();
  }, [id, seasonNumber]);

  return { season, seasonIsLoading, seasonError };
};

export default useSeason;
