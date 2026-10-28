import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IExternalIds } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

const useExternalIds = (type: "movie" | "tv", id: string | undefined) => {
  const [externalIds, setExternalIds] = useState<IExternalIds>();
  const [externalIdsIsLoading, setExternalIdsIsLoading] = useState(true);
  const [externalIdsError, setExternalIdsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExternalIds = async () => {
      setExternalIdsIsLoading(true);
      try {
        const response = await tmdbApi.get<IExternalIds>(
          `/${type}/${id}/external_ids`,
        );
        setExternalIds(response.data);
      } catch (error) {
        setExternalIdsError(getErrorMessage(error));
      } finally {
        setExternalIdsIsLoading(false);
      }
    };
    fetchExternalIds();
  }, [id, type]);

  return { externalIds, externalIdsIsLoading, externalIdsError };
};

export default useExternalIds;
