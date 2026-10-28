import { useEffect, useState } from "react";
import tmdbApi from "../../services/tmdb";
import type { ITVShow } from "../../types/tmdb";
import getErrorMessage from "../../utils/get-error-message";

interface IUseShow {
  id: string;
}

const useShow = (props: IUseShow) => {
  const { id } = props;
  const [show, setShow] = useState<ITVShow>();
  const [showIsLoading, setShowIsLoading] = useState(true);
  const [showError, setShowError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShowById = async () => {
      setShowIsLoading(true);
      setShowError(null);
      try {
        const response = await tmdbApi.get(`/tv/${id}`);
        setShow(response.data);
      } catch (error) {
        setShowError(getErrorMessage(error));
      } finally {
        setShowIsLoading(false);
      }
    };
    fetchShowById();
  }, [id]);
  return { show, showIsLoading, showError };
};

export default useShow;
