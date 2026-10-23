import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { ITVShow } from "../../types/tmdb";

interface IUseShow {
  id: string;
}

const useShow = (props: IUseShow) => {
  const { id } = props;
  const [show, setShow] = useState<ITVShow>();
  const [isLoadingShow, setIsLoadingShow] = useState<boolean>(true);

  useEffect(() => {
    const fetchShowById = async () => {
      setIsLoadingShow(true);
      try {
        const response = await tmdbApi.get(`/tv/${id}`);
        setShow(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoadingShow(false);
      }
    };
    fetchShowById();
  }, [id]);
  return { show, isLoadingShow };
};

export default useShow;
