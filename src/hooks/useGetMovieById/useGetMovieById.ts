import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { IMovie } from "../../types/movies";

const useGetMovieById = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieById = async () => {
      setIsLoading(true);
      try {
        const response = await tmdbApi.get(`/movie/${id}`);
        setMovie(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieById();
  }, [id]);
  return { movie, isLoading };
};

export default useGetMovieById;
