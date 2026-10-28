import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { ICastMember, ICredits, ICrewMember } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface ICreditsProps {
  id: string;
  mediaType: "movie" | "tv";
  creditsType: "credits" | "aggregate_credits";
}

const useCredits = ({ id, creditsType, mediaType }: ICreditsProps) => {
  const [cast, setCast] = useState<ICastMember[]>();
  const [crew, setCrew] = useState<ICrewMember[]>();
  const [creditsIsLoading, setCreditsIsLoading] = useState(true);
  const [creditsError, setCreditsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCredits = async () => {
      setCreditsIsLoading(true);
      setCreditsError(null);
      try {
        const response = await tmdbApi.get<ICredits>(
          `/${mediaType}/${id}/${creditsType}`,
        );
        setCast(response.data.cast.toSorted((a, b) => a.order - b.order));
        setCrew(response.data.crew);
      } catch (error) {
        setCreditsError(getErrorMessage(error));
      } finally {
        setCreditsIsLoading(false);
      }
    };

    fetchCredits();
  }, [id, mediaType, creditsType]);

  return { cast, crew, creditsIsLoading, creditsError };
};

export default useCredits;
