import { ImageOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import useGetCreditsOfMovieId from "../../../../../hooks/useGetCreditsOfMovieId";
import { getTmdbImageUrl } from "../../../../../utils";

const CastTab = () => {
  const { cast, isLoadingCredits } = useGetCreditsOfMovieId();

  return (
    <>
      {isLoadingCredits ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-x-4 xl:grid-cols-8 2xl:grid-cols-10">
            {cast?.map((star, index) => (
              <Link
                key={index}
                to={`/star/${star.id}`}
                className="flex w-full flex-col items-center gap-1 p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80"
              >
                {star.profile_path ? (
                  <img
                    src={`${getTmdbImageUrl(star.profile_path, "w200")}`}
                    alt=""
                    className="aspect-2/3 w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex aspect-2/3 w-full items-center justify-center rounded-lg bg-gray-800">
                    <ImageOff className="size-8 stroke-gray-700" />
                  </div>
                )}
                <span className="line-clamp-1 font-semibold">{star.name}</span>
                <span className="line-clamp-1 text-gray-500">
                  {star.character}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CastTab;
