import type { ICrewMember } from "../../types";

const getDirectors = (crew: ICrewMember[] | undefined) => {
  const directors = crew
    ?.filter((member) => member.job === "Director")
    .map((director) => ` ${director.name}`);

  return directors;
};

export default getDirectors;
