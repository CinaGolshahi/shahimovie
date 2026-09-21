import useGetCreditsOfMovieId from "../useGetCreditsOfMovieId";

const useMovieDirectors = () => {
  const { crew } = useGetCreditsOfMovieId();

  const directors = crew?.filter((member) => member.job === "Director") ?? [];

  return { directors };
};

export default useMovieDirectors;
