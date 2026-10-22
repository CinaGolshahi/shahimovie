import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { IMovie } from "../../types/tmdb";

const useMovie = () => {
  const { id } = useParams<{ id: string }>();
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
