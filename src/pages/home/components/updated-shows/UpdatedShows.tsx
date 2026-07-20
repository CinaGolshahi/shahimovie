import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockTVShows } from "../../../../data/tvshows.mock";
import ShowCard from "../../../../components/shared/show-card";

const UpdatedShows = () => {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col gap-4 bg-gray-900/50 p-4 xl:container 2xl:rounded-4xl">
      <div className="flex items-center justify-between px-2">
        <p className="text-lg font-semibold">Updated Shows</p>
        <Link
          to={"/"}
          className="hidden items-center gap-0.5 text-blue-500 hover:underline xl:flex"
        >
          <span>See more</span>
          <ChevronRight className="mt-0.5 size-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {mockTVShows.slice(0, 8).map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <Link
        to={"/"}
        className="flex items-center justify-center gap-0.5 rounded-2xl border-2 border-blue-500 py-4 text-blue-500 transition-all duration-300 active:bg-blue-500 active:text-gray-50 xl:hidden"
      >
        <span>See more</span>
        <ChevronRight className="mt-0.5 size-5" />
      </Link>
    </div>
  );
};

export default UpdatedShows;
