import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPersonCombinedCredits, TCombinedCast } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUsePersonCombinedCredits {
  id: string;
}

const usePersonCombinedCredits = (props: IUsePersonCombinedCredits) => {
  const { id } = props;
  const [personCombinedCreditsCast, setPersonCombinedCreditsCast] =
    useState<TCombinedCast[]>();
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
    personCombinedCreditsCastIsLoading,
    personCombinedCreditsCastError,
  };
};

export default usePersonCombinedCredits;
