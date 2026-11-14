import { Link } from "react-router-dom";
import type { TCombinedCast } from "../../../../types/tmdb";
import { getTmdbImageUrl } from "../../../../utils";
import { ImageOff } from "lucide-react";

interface IFilmographyProps {
  filmography: TCombinedCast[] | undefined;
}

const Filmography = (props: IFilmographyProps) => {
  const { filmography } = props;
  return (
    <>
      <div className="flex overflow-auto md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {filmography
          ?.toSorted((a, b) => b.vote_count - a.vote_count)
          .filter(
            (item, index, array) =>
              array.findIndex((other) => other.id === item.id) === index,
          )
          .map((item) => (
            <Link
              key={item.id}
              to={`/${item.media_type === "movie" ? "movie" : "show"}/${item.id}`}
              className="flex aspect-2/3 w-full min-w-1/3 flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80 md:min-w-1/5 lg:min-w-1/6"
            >
              {item.poster_path ? (
                <img
                  src={`${getTmdbImageUrl(item.poster_path, "w200")}`}
                  alt=""
                  className="aspect-2/3 w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="flex aspect-2/3 w-full items-center justify-center rounded-2xl bg-gray-900">
                  <ImageOff className="size-8 stroke-gray-700" />
                </div>
              )}
              <span className="line-clamp-1 font-semibold">
                {item.media_type === "movie" ? item.title : item.name}
              </span>
              <span className="line-clamp-1 text-gray-500">
                {item.character}
              </span>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Filmography;
