import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../services/tmdb";
import type { ITVShow } from "../../types/tmdb";

const useShow = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<ITVShow>();
  const [isLoadingShow, setIsLoadingShow] = useState<boolean>(true);

  useEffect(() => {
    const fetchShowById = async () => {
      setIsLoadingShow(true);
      try {
        const response = await tmdbApi.get(`/tv/${id}`);
        setShow(response.data);
        setIsLoadingShow(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShowById();
  }, [id]);
  return { show, isLoadingShow };
};

export default useShow;
