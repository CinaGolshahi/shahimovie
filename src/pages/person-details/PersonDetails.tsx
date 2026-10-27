import { ImageOff } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb";
import { usePerson, usePersonCombinedCredits } from "../../hooks";
import { formatReleaseDate, getTmdbImageUrl } from "../../utils";
import LoadingScreen from "./loading-screen";

const PersonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { person, personIsLoading } = usePerson({ id: id ?? "" });
  const { personCombinedCreditsCast, personCombinedCreditsCastIsLoading } =
    usePersonCombinedCredits({ id: id ?? "" });

  return (
    <div className="-mt-20 flex flex-col">
      <div
        style={{
          backgroundImage: `url(${getTmdbImageUrl(personCombinedCreditsCast?.[0]?.backdrop_path, "w200") ?? ""})`,
        }}
        className="w-full bg-cover bg-center"
      >
        <div className="w-full bg-linear-to-b to-gray-950 px-2 pt-24 backdrop-blur-lg backdrop-brightness-50 xl:px-0 xl:pt-16 xl:pb-10">
          <div className="container mx-auto flex flex-col gap-2">
            <Breadcrumb
              items={[
                { label: "Home", link: "/" },
                { label: "Artists", link: "/artists" },
                { label: `${person?.name && person.name}` },
              ]}
            />
            {personIsLoading || personCombinedCreditsCastIsLoading ? (
              <LoadingScreen />
            ) : (
              <>
                <div className="flex flex-col items-center xl:flex-row">
                  <div className="flex w-full flex-col items-center gap-2 text-center select-none xl:flex-row xl:items-start xl:gap-8 xl:text-start">
                    <div className="aspect-2/3 w-2/3 rounded-3xl bg-gray-800 p-px xl:w-1/6">
                      {person?.profile_path ? (
                        <img
                          src={`${getTmdbImageUrl(person?.profile_path, "w500")}`}
                          className="size-full rounded-3xl object-cover"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center rounded-full bg-gray-800">
                          <ImageOff className="size-8 stroke-gray-700" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 xl:w-1/2 xl:items-start xl:pt-10">
                      <p className="flex flex-col gap-1">
                        <span className="text-xl font-bold xl:text-4xl">
                          {person?.name}
                        </span>
                        <span className="text-sm text-gray-300">
                          {person?.known_for_department ?? ""}
                        </span>
                      </p>
                      <p className="text-sm text-gray-400">
                        <span>
                          {formatReleaseDate(person?.birthday ?? "Unknown")}
                        </span>
                        <> • </>
                        <span>{person?.place_of_birth ?? "Unknown"}</span>
                      </p>
                      <p className="line-clamp-6 text-gray-200">
                        {person?.biography ?? "Unknown"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-10">
                  <p className="relative flex items-center ps-8 text-xl font-bold before:absolute before:inset-s-0 before:h-2 before:w-6 before:rounded-full before:bg-blue-500">
                    Known For
                  </p>
                  <div className="flex grid-cols-8 items-stretch gap-4 overflow-auto xl:grid">
                    {personCombinedCreditsCast
                      ?.toSorted((a, b) => b.popularity - a.popularity)
                      .filter(
                        (item, index, array) =>
                          array.findIndex((other) => other.id === item.id) ===
                          index,
                      )
                      .slice(0, 8)
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={`/${item.media_type === "movie" ? "movie" : "show"}/${item.id}`}
                          className="flex aspect-2/3 w-full min-w-1/3 flex-col items-center gap-1 rounded-2xl text-center text-sm transition-all delay-75 duration-300 hover:opacity-80"
                        >
                          {item.poster_path ? (
                            <img
                              src={`${getTmdbImageUrl(item.poster_path, "w200")}`}
                              alt=""
                              className="aspect-2/3 w-full rounded-xl border border-gray-800 object-cover"
                            />
                          ) : (
                            <div className="flex aspect-square w-full items-center justify-center rounded-full bg-gray-800">
                              <ImageOff className="size-8 stroke-gray-700" />
                            </div>
                          )}
                          <span className="line-clamp-1 font-semibold">
                            {item.media_type === "movie"
                              ? item.title
                              : item.name}
                          </span>
                          <span>{item.media_type === "tv"}</span>
                          <span className="line-clamp-1 text-gray-500">
                            {item.character}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
