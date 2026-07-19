import { Link } from "react-router-dom";
import type IShowCardProps from "./show-card.type";

const ShowCard = (props: IShowCardProps) => {
  const { show, className } = props;
  return (
    <div
      key={show.id}
      className={`group relative flex flex-col gap-2 rounded-2xl border-2 border-transparent bg-gray-900 p-2 transition-all duration-300 hover:border-blue-600 xl:border-transparent xl:p-0 ${className}`}
    >
      <img
        src={show.backdropSrc}
        alt={`${show.title}`}
        className="rounded-lg object-cover xl:rounded-2xl"
      />
      <Link
        to={"/"}
        className="inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:py-2 xl:invisible xl:absolute xl:bg-gray-900/60 xl:p-2 xl:py-0 xl:opacity-0 xl:backdrop-blur-lg"
      >
        <p className="rounded-lg bg-blue-950 px-2 py-1 font-semibold xl:rounded-md xl:bg-gray-900">
          {show.title}
        </p>

        <span className="line-clamp-2 rounded-lg bg-blue-950 px-2 py-1 text-sm xl:rounded-md xl:bg-gray-900">
          {show.overview}
        </span>
        <span className="line-clamp-2 rounded-lg bg-blue-950 px-2 py-1 text-xs xl:rounded-md xl:bg-gray-900">
          {`Update: Season ${show.seasons.length} Eposode ${show.seasons.at(-1)?.episodeCount} Just Added!`}
        </span>
      </Link>
      <span className="absolute inset-s-2 inset-be-2 line-clamp-2 hidden rounded-lg bg-blue-950 px-2 py-1 text-xs xl:block xl:rounded-md xl:bg-gray-900">
        {`Update: Season ${show.seasons.length} Eposode ${show.seasons.at(-1)?.episodeCount} Just Added!`}
      </span>
    </div>
  );
};

export default ShowCard;
