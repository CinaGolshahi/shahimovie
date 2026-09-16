import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type {
  ICastMember,
  ICrewMember,
  IMovieCredits,
} from "../../types/credits";

const useGetCreditsOfMovieId = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoadingCredits, setIsLoadingCredits] = useState<boolean>();
  const [cast, setCast] = useState<ICastMember[]>();
  const [crew, setCrew] = useState<ICrewMember[]>();

  useEffect(() => {
    const fetchCredits = async () => {
      setIsLoadingCredits(true);

      try {
        const response = await tmdbApi.get<IMovieCredits>(
          `/movie/${id}/credits`,
        );

        setCast(response.data.cast);
        setCrew(response.data.crew);

        setIsLoadingCredits(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoadingCredits(false);
      }
    };

    fetchCredits();
  }, [id]);

  return { cast, crew, isLoadingCredits };
};

export default useGetCreditsOfMovieId;
