import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  ICastMember,
  ICrewMember,
  IExternalIds,
  IMediaSummary,
  ITVShow,
  ITVShowWithExtras,
} from "../../types";
import getErrorMessage from "../../utils/get-error-message";

const useShow = (id: string | undefined) => {
  const [show, setShow] = useState<ITVShow>();
  const [externalIds, setExternalIds] = useState<IExternalIds>();
  const [cast, setCast] = useState<ICastMember[]>();
  const [crew, setCrew] = useState<ICrewMember[]>();
  const [recommendations, setRecommendations] = useState<IMediaSummary[]>([]);

  const [showIsLoading, setShowIsLoading] = useState(true);
  const [showError, setShowError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShowById = async () => {
      setShowIsLoading(true);
      setShowError(null);
      try {
        const response = await tmdbApi.get<ITVShowWithExtras>(`/tv/${id}`, {
          params: {
            append_to_response:
              "aggregate_credits,external_ids,recommendations",
          },
        });
        const {
          aggregate_credits,
          external_ids,
          recommendations,
          ...showData
        } = response.data;

        setShow(showData);
        setExternalIds(external_ids);
        setCast(aggregate_credits.cast.toSorted((a, b) => a.order - b.order));
        setCrew(aggregate_credits.crew);
        setRecommendations(recommendations.results);
      } catch (error) {
        setShowError(getErrorMessage(error));
      } finally {
        setShowIsLoading(false);
      }
    };
    fetchShowById();
  }, [id]);
  return {
    show,
    cast,
    crew,
    externalIds,
    recommendations,
    showIsLoading,
    showError,
  };
};

export default useShow;
