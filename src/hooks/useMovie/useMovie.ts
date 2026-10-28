import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { IMovie } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUseMovie {
  id: string;
}

const useMovie = (props: IUseMovie) => {
  const { id } = props;
  const [movie, setMovie] = useState<IMovie>();
  const [movieIsLoading, setMovieIsLoading] = useState(true);
  const [movieError, setMovieError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      setMovieIsLoading(true);
      setMovieError(null);
      try {
        const response = await tmdbApi.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        setMovieError(getErrorMessage(error));
      } finally {
        setMovieIsLoading(false);
      }
    };
    fetchMovieById();
  }, [id]);
  return { movie, movieIsLoading, movieError };
};

export default useMovie;
