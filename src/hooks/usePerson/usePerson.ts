import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPerson } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUsePerson {
  id: string;
}

const usePerson = (props: IUsePerson) => {
  const { id } = props;
  const [person, setPerson] = useState<IPerson>();
  const [personIsLoading, setPersonIsLoading] = useState(true);
  const [personError, setPersonError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersonById = async () => {
      setPersonIsLoading(true);
      try {
        const response = await tmdbApi.get(`/person/${id}`);
        setPerson(response.data);
      } catch (error) {
        setPersonError(getErrorMessage(error));
      } finally {
        setPersonIsLoading(false);
      }
    };
    fetchPersonById();
  }, [id]);
  return { person, personIsLoading, personError };
};

export default usePerson;
