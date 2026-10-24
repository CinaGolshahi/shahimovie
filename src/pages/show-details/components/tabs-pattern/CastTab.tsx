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
    mediaType: "tv",
    creditsType: "aggregate_credits",
  });

  return (
    <>
      {isLoadingCredits ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="flex overflow-auto md:grid md:grid-cols-4 xl:grid-cols-8">
            {cast?.map((artist) => (
              <Link
                key={artist.id}
                to={`/artist/${artist.id}`}
                title=""
                className="flex size-full min-w-2/5 flex-col items-center gap-1 p-2 text-center text-xs transition-all delay-75 duration-300 hover:opacity-80 md:w-full xl:text-sm"
              >
                {artist.profile_path ? (
                  <img
                    src={`${getTmdbImageUrl(artist.profile_path, "w200")}`}
                    alt={artist.name}
                    className="aspect-2/3 w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex aspect-2/3 w-full items-center justify-center rounded-lg bg-gray-800">
                    <ImageOff className="size-8 stroke-gray-700" />
                  </div>
                )}
                <span className="line-clamp-1 font-semibold">
                  {artist.name}
                </span>
                <span className="line-clamp-1 text-gray-500">
                  {artist.roles.map((role, index) => (
                    <span key={role.credit_id}>
                      <span>{role.character}</span>
                      {index < artist.roles.length - 1 && " / "}
                    </span>
                  ))}
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
