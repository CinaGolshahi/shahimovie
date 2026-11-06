import { ImageOff } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import MediaDetailsLoader from "../../components/shared/media-details-loader";
import Breadcrumb from "../../components/ui/breadcrumb";
import TabsPattern from "../../components/ui/tabs-pattern";
import { DetailsTab } from "../../components/ui/tabs-pattern/components";
import { usePerson, usePersonCombinedCredits } from "../../hooks";
import { formatReleaseDate, getTmdbImageUrl } from "../../utils";

const ArtistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { person, personIsLoading } = usePerson({ id: id ?? "" });
  const { personCombinedCreditsCast, personCombinedCreditsCastIsLoading } =
    usePersonCombinedCredits({ id: id ?? "" });

  return (
    <>
      {personIsLoading || personCombinedCreditsCastIsLoading ? (
        <MediaDetailsLoader />
      ) : (
        <div className="-mt-20 flex flex-col gap-10">
          <div
            style={{
              backgroundImage: `url(${getTmdbImageUrl(person?.profile_path, "w200") ?? ""})`,
            }}
            className="bg-cover bg-center bg-no-repeat"
          >
            <div className="bg-linear-to-b to-gray-950 pt-24 backdrop-blur-lg backdrop-brightness-50 md:pt-28 xl:h-screen xl:pt-16">
              <div className="container mx-auto flex flex-col gap-2 px-4 md:px-2 xl:px-4">
                <Breadcrumb
                  items={[
                    { label: "Home", link: "/" },
                    { label: "Artists", link: "/artists" },
                    { label: person?.name },
                  ]}
                />

                <div className="flex w-full flex-col items-center gap-2 md:flex-row md:gap-4 xl:gap-8">
                  <div className="flex aspect-2/3 w-2/3 items-center justify-center rounded-3xl bg-gray-900 outline outline-gray-900 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    {person?.profile_path ? (
                      <img
                        src={`${getTmdbImageUrl(person.profile_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <ImageOff className="size-8 stroke-gray-700" />
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center md:w-2/3 md:items-start md:text-start lg:w-3/4 xl:w-2/4">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                        {person?.name}
                      </span>
                      {person?.known_for_department && (
                        <span className="text-sm text-gray-300 italic">
                          {person.known_for_department}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-400">
                      {person?.birthday && (
                        <span>{formatReleaseDate(person?.birthday)}</span>
                      )}

                      {person?.place_of_birth && (
                        <span>
                          <> • </>
                          <>{person.place_of_birth}</>
                          <> min</>
                        </span>
                      )}
                    </p>

                    {person?.biography && (
                      <span className="line-clamp-10 text-gray-200">
                        {person.biography}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-0 xl:pt-8">
                  <p className="relative flex items-center ps-8 text-xl font-bold before:absolute before:inset-s-0 before:h-2 before:w-6 before:rounded-full before:bg-blue-500">
                    Known for
                  </p>
                  <div className="flex grid-cols-8 items-stretch gap-4 overflow-auto xl:grid">
                    {personCombinedCreditsCast
                      ?.toSorted((a, b) => b.vote_count - a.vote_count)
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
                            {item.media_type === "movie"
                              ? item.title
                              : item.name}
                          </span>
                          <span className="line-clamp-1 text-gray-500">
                            {item.character}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TabsPattern
            tabs={[
              {
                label: "Information",
                content: (
                  <DetailsTab
                    items={[
                      {
                        label: "Known for Department:",
                        value: person?.known_for_department,
                      },
                      {
                        label: "Birthday:",
                        value: formatReleaseDate(person?.birthday),
                      },
                      {
                        label: "Place of Birth:",
                        value: person?.place_of_birth,
                      },
                    ]}
                  />
                ),
              },
            ]}
          />
        </div>
      )}
    </>
  );
};

export default ArtistDetails;
