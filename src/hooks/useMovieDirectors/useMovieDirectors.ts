import useCredits from "../useCredits";

interface IUseMovieDirectors {
  id: string;
}

const useMovieDirectors = (props: IUseMovieDirectors) => {
  const { id } = props;
  const { crew } = useCredits({
    id: id,
    mediaType: "movie",
    creditsType: "credits",
  });

  const directors = crew?.filter((member) => member.job === "Director") ?? [];

  return { directors };
};

export default useMovieDirectors;
