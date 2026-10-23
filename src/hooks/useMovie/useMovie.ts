import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie } from "../../types/tmdb";

interface IUseMovie {
  id: string;
}

const useMovie = (props: IUseMovie) => {
  const { id } = props;
  const [movie, setMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieById = async () => {
      setIsLoading(true);
      try {
        const response = await tmdbApi.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [id]);
  return { movie, isLoading };
};

export default useMovie;
