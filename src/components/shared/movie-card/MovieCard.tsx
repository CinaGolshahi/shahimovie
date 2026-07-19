import { Link } from "react-router-dom";
import type IMovieCard from "./movie-card.type";

const MovieCard = (props: IMovieCard) => {
  const { title, releaseYear, posterSrc } = props;
  return (
    <div className="group relative min-w-2/3 rounded-md border-2 border-blue-600 transition-all duration-300 hover:border-blue-600 xl:border-transparent">
      <img
        src={posterSrc}
        alt={`${title} (${releaseYear})`}
        className="rounded-md object-cover"
      />
      <Link
        to={"/"}
        className="bg-blur absolute inset-0 flex flex-col items-start justify-end rounded-md px-2 py-4 transition-all duration-300 group-hover:visible group-hover:py-4 group-hover:opacity-100 xl:invisible xl:py-2 xl:opacity-0"
      >
        <p className="rounded-full bg-blue-950 px-2 py-1 font-semibold">
          {title} <span className="font-normal">{`(${releaseYear})`}</span>
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
