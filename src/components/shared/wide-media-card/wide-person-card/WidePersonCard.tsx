import { ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../../../utils";
import type { IWidePersonCardProps } from "./WidePersonCard.type";

const WidePersonCard = (props: IWidePersonCardProps) => {
  const { person, className } = props;
  return (
    <Link
      to={`/artist/${person.id}`}
      className={`${className} group relative flex w-full gap-2 rounded-2xl bg-gray-900 p-2 outline-2 outline-transparent transition-all duration-300 hover:outline-blue-600`}
    >
      {person.profile_path ? (
        <img
          src={`${getTmdbImageUrl(person.profile_path, "w300")}`}
          alt={`${person.name}`}
          className="aspect-2/3 w-1/3 rounded-xl object-cover"
        />
      ) : (
        <div className="flex aspect-2/3 w-1/3 items-center justify-center rounded-xl bg-gray-950 object-cover">
          <ImageOff className="size-10 stroke-gray-700" />
        </div>
      )}
      <div className="flex flex-col gap-2 py-2">
        <p className="flex flex-col gap-0.5">
          <span className="font-bold">{person.name}</span>
          {person.name !== person.original_name && (
            <span className="text-sm text-gray-600">
              {person.original_name}
            </span>
          )}
          <span className="text-sm text-gray-300">
            {person.known_for_department}
          </span>
        </p>
        <p className="line-clamp-3 text-gray-400">
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

export default WidePersonCard;
