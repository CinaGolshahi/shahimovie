import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IExternalIds } from "../../types/tmdb";

const useExternalIds = (type: "movie" | "tv", id: string | undefined) => {
  const [externalIds, setExternalIds] = useState<IExternalIds>();

  useEffect(() => {
    const fetchExternalIds = async () => {
      const response = await tmdbApi.get<IExternalIds>(
        `/${type}/${id}/external_ids`,
      );
      setExternalIds(response.data);
    };
    fetchExternalIds();
  }, [id]);

  return { externalIds };
};

export default useExternalIds;
