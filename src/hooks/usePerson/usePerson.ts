import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IPerson } from "../../types/tmdb";

interface IUsePerson {
  id: string;
}

const usePerson = (props: IUsePerson) => {
  const { id } = props;
  const [person, setPerson] = useState<IPerson>();
  const [personIsLoading, setPersonIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPersonById = async () => {
      setPersonIsLoading(true);
      try {
        const response = await tmdbApi.get(`/person/${id}`);
        setPerson(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setPersonIsLoading(false);
      }
    };
    fetchPersonById();
  }, [id]);
  return { person, personIsLoading };
};

export default usePerson;
