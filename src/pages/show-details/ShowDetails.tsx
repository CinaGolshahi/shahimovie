import { Link, useParams } from "react-router-dom";

import { Bookmark, ImageOff, Tv } from "lucide-react";

import {
  useCredits,
  useRecommendations,
  useScores,
  useShow,
} from "../../hooks";

import { getTmdbImageUrl, getYearFromDate } from "../../utils";

import { CastTab, DetailsTab, SeasonsTab } from "./components";

import MediaSection from "../../components/common/media-section";
import MediaDetailsLoader from "../../components/shared/media-details-loader";
import RattingBar from "../../components/shared/ratting-bar";
import Breadcrumb from "../../components/ui/breadcrumb";
import Button from "../../components/ui/button";
import TabsPattern from "../../components/ui/tabs-pattern";

const ShowDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { show, showIsLoading } = useShow({ id: id ?? "" });
  const { cast, creditsIsLoading } = useCredits({
    id: id ?? "",
    mediaType: "tv",
    creditsType: "aggregate_credits",
  });
  const { scores, scoresIsLoading } = useScores("tv", id ?? "");
  const { recommendations, recommendationsIsLoading } = useRecommendations({
    id: id ?? "",
    type: "tv",
  });

  return (
    <>
      {showIsLoading || creditsIsLoading ? (
        <MediaDetailsLoader />
      ) : (
        <div className="-mt-20 flex flex-col gap-10">
          <div
            style={{
              backgroundImage: `url(${getTmdbImageUrl(show?.backdrop_path, "w200") ?? ""})`,
            }}
            className="bg-cover bg-center bg-no-repeat"
          >
            <div className="bg-linear-to-b to-gray-950 pt-24 backdrop-blur-lg backdrop-brightness-50 xl:h-screen xl:pt-16">
              <div className="container mx-auto flex flex-col gap-2 px-4">
                <Breadcrumb
                  items={[
                    { label: "Home", link: "/" },
                    { label: "Shows", link: "/shows" },
                    { label: show?.name },
                  ]}
                />

                <div className="flex w-full flex-col items-center gap-2 xl:flex-row xl:gap-8">
                  <div className="flex aspect-2/3 w-2/3 items-center justify-center rounded-3xl bg-gray-900 outline outline-gray-900 xl:w-1/5">
                    {show?.poster_path ? (
                      <img
                        src={`${getTmdbImageUrl(show.poster_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <ImageOff className="size-8 stroke-gray-700" />
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center xl:w-2/4 xl:items-start xl:text-start">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold xl:text-4xl">
                        {show?.name}
                      </span>
                      {show?.tagline && (
                        <span className="text-sm text-gray-300 italic">
                          {show.tagline}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-300">
                      {show?.genres &&
                        show?.genres.map((genre, index) => (
                          <span key={genre.id}>
                            <span>{genre.name}</span>
                            {index < show?.genres.length - 1 && ", "}
                          </span>
                        ))}
                    </p>
                    <p className="text-sm text-gray-400">
                      {show?.first_air_date && (
                        <span>
                          <>{getYearFromDate(show?.first_air_date)}</>
                          {"=>"}
                          <>{getYearFromDate(show?.last_air_date)}</>
                          {" • "}
                        </span>
                      )}

                      {show?.seasons && (
                        <span>
                          <>{show.seasons.length}</>
                          <>
                            {show.seasons.length > 1 ? " Seasons" : " Season"}
                          </>
                          {" • "}
                        </span>
                      )}
                      {show?.status && (
                        <span>
                          <>{show.status}</>
                          {" • "}
                        </span>
                      )}
                      {show?.production_countries && (
                        <span>
                          {show?.production_countries.map((country, index) => (
                            <span key={country.iso_3166_1}>
                              <span>{country.name}</span>
                              {index < show?.production_countries.length - 1 &&
                                ", "}
                            </span>
                          ))}
                        </span>
                      )}
                    </p>

                    <RattingBar
                      scores={scores}
                      scoresIsLoading={scoresIsLoading}
                      tmdbScore={show?.vote_average}
                    />

                    {show?.overview && (
                      <span className="text-gray-200 xl:pe-36">
                        {show.overview}
                      </span>
                    )}
                    <div className="flex gap-2 py-4">
                      <Button>
                        <Tv className="size-5" />
                        <span className="">Trailer</span>
                      </Button>
                      <Button variant="btn-secondary" size="btn-squ-md">
                        <Bookmark />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 xl:pt-8">
                  <p className="relative flex items-center ps-8 text-xl font-bold before:absolute before:inset-s-0 before:h-2 before:w-6 before:rounded-full before:bg-blue-500">
                    Top Stars
                  </p>
                  <div className="flex grid-cols-8 items-stretch gap-4 overflow-auto xl:grid">
                    {cast?.slice(0, 8).map((artist) => (
                      <Link
                        key={artist.id}
                        to={`/artist/${artist.id}`}
                        className="flex aspect-2/3 w-full min-w-1/3 flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80"
                      >
                        {artist.profile_path ? (
                          <img
                            src={`${getTmdbImageUrl(artist.profile_path, "w200")}`}
                            alt=""
                            className="aspect-square w-full rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex aspect-square w-full items-center justify-center rounded-full bg-gray-800">
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
                </div>
              </div>
            </div>
          </div>

          <TabsPattern
            tabs={[
              { label: "Details", content: <DetailsTab id={`${id}`} /> },
              { label: "Seasons", content: <SeasonsTab id={`${id}`} /> },
              { label: "Cast", content: <CastTab id={`${id}`} /> },
            ]}
          />
          <MediaSection
            title="Recommendations"
            loading={recommendationsIsLoading}
            media={recommendations}
          />
        </div>
      )}
    </>
  );

  // if (showIsLoading || creditsIsLoading) {
  //   return <LoadingScreen />;
  // } else if (showError) {
  //   return (
  //     <NotFoundPage
  //       title="Show not found!"
  //       linkTo={"/shows"}
  //       linkLabel="Back to Shows"
  //     />
  //   );
  // } else {
  //   return (
  //     <div className="flex flex-col gap-10">
  //       <div
  //         style={{
  //           backgroundImage: `url(${getTmdbImageUrl(show?.backdrop_path, "w200") ?? ""})`,
  //         }}
  //         className="-mt-20 w-full bg-cover bg-center"
  //       >
  //         <div className="w-full bg-linear-to-b to-gray-950 px-2 pt-24 backdrop-blur-md backdrop-brightness-50 xl:px-0 xl:pt-16 xl:pb-10">
  //           <div className="container mx-auto flex flex-col gap-2.5 xl:px-10">
  //             <Breadcrumb
  //               items={[
  //                 { label: "Home", link: "/" },
  //                 { label: "Shows", link: "/shows" },
  //                 { label: show?.name },
  //               ]}
  //             />
  //             <div className="flex flex-col items-center xl:flex-row">
  //               <div className="flex flex-col items-center gap-2 text-center select-none xl:w-3/4 xl:flex-row xl:gap-8 xl:text-start">
  //                 <div className="aspect-2/3 w-2/3 shrink-0 rounded-3xl bg-gray-800 p-px xl:w-1/3">
  //                   {show?.poster_path ? (
  //                     <img
  //                       src={`${getTmdbImageUrl(show?.poster_path, "w500")}`}
  //                       className="size-full rounded-3xl object-cover"
  //                     />
  //                   ) : (
  //                     <div className="flex size-full items-center justify-center rounded-full bg-gray-800">
  //                       <ImageOff className="size-8 stroke-gray-700" />
  //                     </div>
  //                   )}
  //                 </div>
  //                 <div className="flex flex-col items-center justify-center gap-2 px-2 xl:items-start xl:px-0">
  //                   <p className="flex flex-col gap-1">
  //                     <span className="text-xl font-bold xl:text-4xl">
  //                       {show?.name}
  //                     </span>
  //                     <span className="text-sm text-gray-300 italic">
  //                       {show?.tagline}
  //                     </span>
  //                   </p>
  //                   <p className="text-sm text-gray-300">
  //                     {show?.genres &&
  //                       show?.genres.map((genre, index) => (
  //                         <span key={genre.id}>
  //                           <span>{genre.name}</span>
  //                           {index < show?.genres.length - 1 && ", "}
  //                         </span>
  //                       ))}
  //                   </p>
  //                   <p className="text-sm text-gray-400">
  //                     <span>
  //                       {getYearFromDate(show?.first_air_date ?? "Unknown")}
  //                     </span>
  //                     <> • </>
  //                     <span>
  //                       {show?.number_of_seasons ? (
  //                         <>
  //                           {show.number_of_seasons}
  //                           {show.seasons.length > 1 ? " Seasons" : " Season"}
  //                         </>
  //                       ) : (
  //                         <></>
  //                       )}
  //                     </span>
  //                     <> • </>
  //                     <span>{show?.status ?? "Unknown"}</span>
  //                     <> • </>
  //                     {show?.production_countries
  //                       ? show?.production_countries.map((country, index) => (
  //                           <span key={country.iso_3166_1}>
  //                             <span>{country.name}</span>
  //                             {index < show?.production_countries.length - 1 &&
  //                               ", "}
  //                           </span>
  //                         ))
  //                       : "Unknown"}
  //                   </p>
  //                   <RattingBar
  //                     scores={scores}
  //                     scoresIsLoading={scoresIsLoading}
  //                     tmdbScore={show?.vote_average}
  //                   />
  //                   <p className="text-gray-200 xl:pe-36">
  //                     {show?.overview ?? "Unknown"}
  //                   </p>
  //                   <div className="flex gap-2 py-4">
  //                     <Button>
  //                       <Film className="size-5" />
  //                       <span className="">Trailer</span>
  //                     </Button>
  //                     <Button variant="btn-secondary" size="btn-squ-md">
  //                       <Bookmark />
  //                     </Button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="hidden grid-cols-8 items-stretch gap-4 xl:grid">
  //               {cast?.slice(0, 8).map((artist) => (
  //                 <Link
  //                   key={artist.id}
  //                   to={`/artist/${artist.id}`}
  //                   className="flex aspect-2/3 w-full flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:scale-105"
  //                 >
  //                   {artist.profile_path ? (
  //                     <img
  //                       src={`${getTmdbImageUrl(artist.profile_path, "w200")}`}
  //                       alt=""
  //                       className="aspect-square w-full rounded-full object-cover"
  //                     />
  //                   ) : (
  //                     <div className="flex aspect-square w-full items-center justify-center rounded-full bg-gray-800">
  //                       <ImageOff className="size-8 stroke-gray-700" />
  //                     </div>
  //                   )}
  //                   <span className="line-clamp-1 font-semibold">
  //                     {artist.name}
  //                   </span>
  //                   <span className="line-clamp-1 text-gray-500">
  //                     {artist.roles.map((role, index) => (
  // <span key={role.credit_id}>
  //   <span>{role.character}</span>
  //   {index < artist.roles.length - 1 && " / "}
  // </span>
  //                     ))}
  //                   </span>
  //                 </Link>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-full">
  //
  //       </div>

  //     </div>
  //   );
  // }
};

export default ShowDetails;
