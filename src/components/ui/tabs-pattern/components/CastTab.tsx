import { Link } from "react-router-dom";
import type { ICastMember } from "../../../../types/tmdb";
import { getTmdbImageUrl } from "../../../../utils";
import { ImageOff } from "lucide-react";

interface ICastTabProps {
  cast: ICastMember[] | undefined;
  creditsIsLoading: boolean;
}
const CastTab = (props: ICastTabProps) => {
  const { cast, creditsIsLoading } = props;
  return (
    <>
      {creditsIsLoading ? (
        <div className=""></div>
      ) : (
        <>
          <div className="flex overflow-auto md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {cast?.map((member) => (
              <Link
                key={member.id}
                to={`/artist/${member.id}`}
                className="flex size-full min-w-2/5 flex-col items-center gap-1 p-2 text-center text-xs transition-all delay-75 duration-300 hover:opacity-80 md:text-sm"
              >
                {member.profile_path ? (
                  <img
                    src={`${getTmdbImageUrl(member.profile_path, "w200")}`}
                    alt={member.name}
                    className="aspect-2/3 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-2/3 w-full items-center justify-center rounded-lg bg-gray-800">
                    <ImageOff className="size-8 stroke-gray-700" />
                  </div>
                )}
                <span className="line-clamp-1 font-semibold">
                  {member.name}
                </span>
                <span className="line-clamp-1 text-gray-500">
                  {member.character ||
                    member.roles.map((role, index) => (
                      <span key={role.credit_id}>
                        <span>{role.character}</span>
                        {index < member.roles.length - 1 && " / "}
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
