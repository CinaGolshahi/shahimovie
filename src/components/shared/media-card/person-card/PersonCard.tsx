import { ImageOff, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { IPersonCardProps } from "./PersonCard.type";

const PersonCard = (props: IPersonCardProps) => {
  const { person, className } = props;

  return (
    <Link
      to={`/artist/${person.id}`}
      key={person.id}
      className={`${className} group relative aspect-2/3 w-full overflow-hidden rounded-2xl bg-gray-900 p-0.5 transition-all duration-300`}
    >
      {person.profile_path ? (
        <img
          src={`${getTmdbImageUrl(person.profile_path, "w300")}`}
          alt={`${person.name}`}
          className="size-full rounded-2xl object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-start justify-end gap-1 rounded-2xl bg-linear-to-b from-transparent to-gray-950 p-4 opacity-0 transition-all duration-300 group-hover:pb-4 group-hover:opacity-100 xl:pb-0">
        <p className="flex flex-col">
          <span className="line-clamp-2 font-bold">{person.name}</span>
        </p>
        {person.known_for_department && (
          <span className="text-sm text-gray-400 italic">
            {person.known_for_department}
          </span>
        )}
      </div>

      <div className="absolute inset-0 flex items-end justify-between gap-1 rounded-b-2xl bg-linear-to-b to-gray-950/80 px-3 py-2 text-gray-300 md:hidden">
        <span>{person.name}</span>
        <div>
          <User2 className="size-4" />
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
