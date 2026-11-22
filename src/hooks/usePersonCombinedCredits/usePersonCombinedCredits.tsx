import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type {
  IPersonCombinedCredits,
  TCombinedCast,
  TCombinedCrew,
} from "../../types";
import getErrorMessage from "../../utils/get-error-message";

interface IUsePersonCombinedCredits {
  id: string;
}

const usePersonCombinedCredits = (props: IUsePersonCombinedCredits) => {
  const { id } = props;
  const [personCombinedCreditsCast, setPersonCombinedCreditsCast] =
    useState<TCombinedCast[]>();
  const [personCombinedCreditsCrew, setPersonCombinedCreditsCrew] =
    useState<TCombinedCrew[]>();

  const [
    personCombinedCreditsCastIsLoading,
    setPersonCombinedCreditsCastIsLoading,
  ] = useState(true);
  const [personCombinedCreditsCastError, setPersonCombinedCreditsCastError] =
    useState<string | null>(null);

  useEffect(() => {
    const fetchPersonCombinedCreditsCast = async () => {
      setPersonCombinedCreditsCastIsLoading(true);
      setPersonCombinedCreditsCastError(null);
      try {
        const response = await tmdbApi.get<IPersonCombinedCredits>(
          `/person/${id}/combined_credits`,
        );
        setPersonCombinedCreditsCast(response.data.cast);
        setPersonCombinedCreditsCrew(response.data.crew);
      } catch (error) {
        setPersonCombinedCreditsCastError(getErrorMessage(error));
      } finally {
        setPersonCombinedCreditsCastIsLoading(false);
      }
    };

    fetchPersonCombinedCreditsCast();
  }, [id]);

  return {
    personCombinedCreditsCast,
    personCombinedCreditsCrew,
    personCombinedCreditsCastIsLoading,
    personCombinedCreditsCastError,
  };
};

export default usePersonCombinedCredits;
