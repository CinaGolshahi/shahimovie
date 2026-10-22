import { Bookmark, Film, ImageOff } from "lucide-react";

import { Imdb, RottenTomatoes, TheMovieDatabase } from "@thesvg/react";
import { Link, useParams } from "react-router-dom";
import { ShowsSection } from "../../components/common/movies-section";
import {
  RatingColorFrom10,
  RatingColorFrom100,
} from "../../components/common/rating-color";
import Breadcrumb from "../../components/ui/breadcrumb";
import Button from "../../components/ui/button";
import TabsPattern from "../../components/ui/tabs-pattern";
import {
  useCredits,
  useScores,
  useShow,
  useShowRecommendations,
} from "../../hooks";
import { getTmdbImageUrl, getYearFromDate } from "../../utils";
import { CastTab, DetailsTab, LoadingScreen, SeasonsTab } from "./components";

const ShowDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { show, isLoadingShow } = useShow();
  const { cast } = useCredits({
    mediaType: "tv",
    creditsType: "aggregate_credits",
  });
  const { scores, scoresIsLoading } = useScores("tv", id ?? "");
  const { showRecommendations, showRecommendationsIsLoading } =
    useShowRecommendations();

  if (isLoadingShow) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="flex flex-col gap-10">
        <div
          style={{
            backgroundImage: `url(${getTmdbImageUrl(show?.backdrop_path, "w200") ?? ""})`,
          }}
          className="-mt-20 w-full bg-cover bg-center"
        >
          <div className="w-full bg-linear-to-b to-gray-950 px-2 pt-24 backdrop-blur-md backdrop-brightness-50 xl:px-0 xl:pt-16 xl:pb-10">
            <div className="container mx-auto flex flex-col gap-2.5 xl:px-10">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "Shows", link: "/shows" },
                  { label: show?.name },
                ]}
              />
              <div className="flex flex-col items-center xl:flex-row">
                <div className="flex flex-col items-center gap-2 text-center select-none xl:w-3/4 xl:flex-row xl:gap-8 xl:text-start">
                  <div className="aspect-2/3 w-2/3 shrink-0 rounded-3xl bg-gray-800 p-px xl:w-1/3">
                    {show?.poster_path ? (
                      <img
                        src={`${getTmdbImageUrl(show?.poster_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center rounded-full bg-gray-800">
                        <ImageOff className="size-8 stroke-gray-700" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-2 xl:items-start xl:px-0">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold xl:text-4xl">
                        {show?.name}
                      </span>
                      <span className="text-sm text-gray-300 italic">
                        {show?.tagline}
                      </span>
                    </p>
                    <p className="text-sm text-gray-300">
                      {show?.genres &&
                        show?.genres.map((genre, index) => (
                          <span key={index}>
                            <span>{genre.name}</span>
                            {index < show?.genres.length - 1 && ", "}
                          </span>
                        ))}
                    </p>
                    <p className="text-sm text-gray-400">
                      <span>
                        {getYearFromDate(show?.first_air_date ?? "Unknown")}
                      </span>
                      <> • </>
                      <span>
                        {show?.number_of_seasons ? (
                          <>
                            {show.number_of_seasons}
                            {show.seasons.length > 1 ? " Seasons" : " Season"}
                          </>
                        ) : (
                          <></>
                        )}
                      </span>
                      <> • </>
                      <span>{show?.status ?? "Unknown"}</span>
                      <> • </>
                      {show?.production_countries
                        ? show?.production_countries.map((country, index) => (
                            <span key={index}>
                              <span>{country.name}</span>
                              {index < show?.production_countries.length - 1 &&
                                ", "}
                            </span>
                          ))
                        : "Unknown"}
                    </p>

                    {scoresIsLoading ? (
                      <div className="my-1 h-6 w-64 animate-pulse rounded-full bg-gray-50/10"></div>
                    ) : (
                      <div className="my-1 flex items-center gap-4 transition-all delay-75 duration-300">
                        <div className="flex items-center gap-2">
                          <RottenTomatoes className="size-5" />
                          <RatingColorFrom100
                            rating={Number(
                              scores?.Ratings?.[1]?.Value.slice(0, -1),
                            )}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Imdb className="size-5 bg-[#F5C518] fill-black" />
                          <RatingColorFrom10
                            rating={Number(scores?.imdbRating)}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <TheMovieDatabase className="size-5" />
                          <RatingColorFrom10
                            rating={Number(show?.vote_average.toFixed(1))}
                          />
                        </div>
                      </div>
                    )}
                    <p className="text-gray-200 xl:pe-36">
                      {show?.overview ?? "Unknown"}
                    </p>
                    <div className="flex gap-2 py-4">
                      <Button>
                        <Film className="size-5" />
                        <span className="">Trailer</span>
                      </Button>
                      <Button variant="btn-secondary" size="btn-squ-md">
                        <Bookmark />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden grid-cols-8 items-stretch gap-4 xl:grid">
                {cast?.slice(0, 8).map((artist, index) => (
                  <Link
                    key={index}
                    to={`/artist/${artist.id}`}
                    className="flex aspect-2/3 w-full flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:scale-105"
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
                      {artist.roles.map((item, index) => (
                        <span key={index}>
                          <span>{item.character}</span>
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
        <div className="w-full">
          <TabsPattern
            tabs={[
              { label: "Details", content: <DetailsTab /> },
              { label: "Seasons", content: <SeasonsTab /> },
              { label: "Cast", content: <CastTab /> },
            ]}
          />
        </div>

        <ShowsSection
          title="Recommendations"
          loading={showRecommendationsIsLoading}
          shows={showRecommendations}
        />
      </div>
    );
  }
};

export default ShowDetails;
