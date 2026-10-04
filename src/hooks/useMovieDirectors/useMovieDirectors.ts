import useCredits from "../useCredits";

const useMovieDirectors = () => {
  const { crew } = useCredits({ mediaType: "movie", creditsType: "credits" });

  const directors = crew?.filter((member) => member.job === "Director") ?? [];

  return { directors };
};

export default useMovieDirectors;
