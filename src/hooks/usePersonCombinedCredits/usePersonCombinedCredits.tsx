import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPersonCombinedCredits, TCombinedCast } from "../../types/tmdb";

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
  ] = useState<boolean>();

  useEffect(() => {
    const fetchPersonCombinedCreditsCast = async () => {
      setPersonCombinedCreditsCastIsLoading(true);

      try {
        const response = await tmdbApi.get<IPersonCombinedCredits>(
          `/person/${id}/combined_credits`,
        );
        setPersonCombinedCreditsCast(response.data.cast);
      } catch (err) {
        console.log(err);
      } finally {
        setPersonCombinedCreditsCastIsLoading(false);
      }
    };

    fetchPersonCombinedCreditsCast();
  }, [id]);

  return { personCombinedCreditsCast, personCombinedCreditsCastIsLoading };
};

export default usePersonCombinedCredits;
