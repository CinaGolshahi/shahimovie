import { Link } from "react-router-dom";
import type IShowCardProps from "./show-card.type";
import { ChevronRight } from "lucide-react";

const ShowCard = (props: IShowCardProps) => {
  const { show, className } = props;
  return (
    <div
      key={show.id}
      className={`${className} group relative flex flex-col gap-2 rounded-2xl border-2 border-transparent bg-gray-900 p-2 transition-all duration-300 hover:border-blue-600 xl:border-transparent xl:p-0`}
    >
      <img
        src={show.backdropSrc}
        alt={`${show.title}`}
        className="rounded-lg object-cover xl:rounded-2xl"
      />
      <Link
        to={"/"}
        className="inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 xl:invisible xl:absolute xl:bg-gray-900/60 xl:p-2 xl:pb-0 xl:opacity-0 xl:backdrop-blur-lg xl:group-hover:pb-9"
      >
        <p className="rounded-lg bg-transparent px-2 py-1 font-bold xl:rounded-md xl:bg-gray-900">
          {show.title}
        </p>

        <span className="line-clamp-2 rounded-lg bg-transparent px-2 py-1 text-sm xl:rounded-md xl:bg-gray-900">
          {show.overview}
        </span>
      </Link>

      <div className="inset-be-0 flex w-full items-center justify-between p-2 xl:absolute">
        <span className="rounded-lg bg-transparent text-xs xl:rounded-md xl:bg-gray-900 xl:px-2 xl:py-1">
          {`Update: Season ${show.seasons.length} Eposode ${show.seasons.at(-1)?.episodeCount} Just Added!`}
        </span>
        <Link
          to={"/"}
          className="flex rounded-lg bg-blue-500 px-2 py-1 xl:hidden"
        >
          <span>Watch</span>
          <ChevronRight className="mt-0.5 size-5" />
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
