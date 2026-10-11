import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { ISeasonDetails } from "../../types/tmdb";

const useSeason = (seasonNumber: number) => {
  const { id } = useParams<{ id: string }>();
  const [season, setSeason] = useState<ISeasonDetails>();
  const [seasonIsLoading, setSeasonIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSeason = async () => {
      setSeasonIsLoading(true);
      try {
        const response = await tmdbApi.get(`/tv/${id}/season/${seasonNumber}`);
        setSeason(response.data);
        setSeasonIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setSeasonIsLoading(false);
      }
    };

    fetchSeason();
  }, [id, seasonNumber]);

  return { season, seasonIsLoading };
};

export default useSeason;
