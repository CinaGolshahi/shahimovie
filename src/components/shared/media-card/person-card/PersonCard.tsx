import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { IPersonCardProps } from "./PersonCard.type";

const PersonCard = (props: IPersonCardProps) => {
  const { person, className } = props;
  return (
    <Link
      to={`/artist/${person.id}`}
      className={`${className} group relative aspect-2/3 w-full rounded-2xl border-2 border-transparent bg-gray-900 transition-all duration-300 hover:border-blue-600`}
    >
      {person.profile_path ? (
        <img
          src={`${getTmdbImageUrl(person.profile_path, "w300")}`}
          alt={`${person.name}`}
          className="size-full rounded-2xl object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 rounded-2xl bg-linear-to-b from-transparent to-gray-900 p-2 text-center transition-all duration-300 xl:items-start xl:p-4 xl:pb-0 xl:text-start xl:opacity-0 xl:group-hover:pb-4 xl:group-hover:opacity-100">
        <p className="flex flex-col gap-0.5">
          <span className="font-bold">{person.name}</span>
          {person.name !== person.original_name && (
            <span className="text-sm text-gray-600">
              {person.original_name}
            </span>
          )}
        </p>
        <p className="line-clamp-2 text-gray-300">
          {person.known_for.map((item, index) => (
            <span key={item.id}>
              {item.media_type === "movie" ? item.title : item.name}
              {index < person.known_for.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default PersonCard;
