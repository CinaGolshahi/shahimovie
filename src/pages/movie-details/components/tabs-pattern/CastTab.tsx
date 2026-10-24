import { ImageOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCredits } from "../../../../hooks";
import { getTmdbImageUrl } from "../../../../utils";

interface ICastTab {
  id: string;
}

const CastTab = (props: ICastTab) => {
  const { id } = props;
  const { cast, isLoadingCredits } = useCredits({
    id: id,
    mediaType: "movie",
    creditsType: "credits",
  });

  return (
    <>
      {isLoadingCredits ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="flex overflow-auto xl:grid xl:grid-cols-8">
            {cast?.map((star) => (
              <Link
                key={star.id}
                to={`/star/${star.id}`}
                title={`${star.name}: ${star.character}`}
                className="flex size-full min-w-2/5 flex-col items-center gap-1 p-2 text-center text-xs transition-all delay-75 duration-300 hover:opacity-80 xl:text-sm"
              >
                {star.profile_path ? (
                  <img
                    src={`${getTmdbImageUrl(star.profile_path, "w200")}`}
                    alt={star.name}
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
