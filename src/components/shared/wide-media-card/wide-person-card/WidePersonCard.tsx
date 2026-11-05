import { ImageOff, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { IWidePersonCardProps } from "./WidePersonCard.type";

const WidePersonCard = (props: IWidePersonCardProps) => {
  const { person, className } = props;

  return (
    <Link
      to={`/artist/${person.id}`}
      className={`${className} group relative flex aspect-video max-h-40 w-full gap-4 rounded-2xl bg-gray-900/50 p-2 outline-2 outline-gray-900/50 transition-all delay-75 duration-300 hover:outline-blue-600`}
    >
      {person.profile_path ? (
        <img
          src={`${getTmdbImageUrl(person.profile_path, "w300")}`}
          alt={`${person.name}`}
          className="aspect-2/3 h-full rounded-xl object-cover outline outline-gray-800"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-2/3 h-full items-center justify-center rounded-xl bg-gray-950 object-cover">
          <ImageOff className="size-8 stroke-gray-700" />
        </div>
      )}
      <div className="relative flex flex-col gap-2 pt-2">
        <p className="flex flex-col gap-0.5">
          <span className="font-bold">
            <User2 className="me-1 -mt-1 inline size-4" />
            <span>
              <span>{person.name}</span>
            </span>
          </span>
          {person.name !== person.original_name && (
            <span className="text-sm text-gray-600 italic">
              {person.original_name}
            </span>
          )}
          {person.known_for_department && (
            <span className="text-sm text-gray-600 italic">
              {person.known_for_department}
            </span>
          )}
        </p>

        {person.known_for && (
          <p className="line-clamp-3 text-gray-400">
            {person.known_for.map((user, index) => (
              <span key={user.id}>
                {user.media_type === "movie" ? user.title : user.name}
                {index < person.known_for.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
      </div>
    </Link>
  );
};

export default WidePersonCard;
