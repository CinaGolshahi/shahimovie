import { Link, useParams } from "react-router-dom";

import { Bookmark, Film, ImageOff } from "lucide-react";

import {
  useCredits,
  useMovie,
  useRecommendations,
  useScores,
} from "../../hooks";

import { getTmdbImageUrl, getYearFromDate } from "../../utils";

import { CastTab, DetailsTab } from "./components";

import MediaSection from "../../components/common/media-section";
import MediaDetailsLoader from "../../components/shared/media-details-loader";
import RattingBar from "../../components/shared/ratting-bar";
import Breadcrumb from "../../components/ui/breadcrumb";
import Button from "../../components/ui/button";
import TabsPattern from "../../components/ui/tabs-pattern";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { movie, movieIsLoading } = useMovie({ id: id ?? "" });
  const { cast, creditsIsLoading } = useCredits({
    id: id ?? "",
    mediaType: "movie",
    creditsType: "credits",
  });
  const { scores, scoresIsLoading } = useScores("movie", id ?? "");
  const { recommendations, recommendationsIsLoading } = useRecommendations({
    id: id ?? "",
    type: "movie",
  });

  return (
    <>
      {movieIsLoading || creditsIsLoading ? (
        <MediaDetailsLoader />
      ) : (
        <div className="-mt-20 flex flex-col gap-10">
          <div
            style={{
              backgroundImage: `url(${getTmdbImageUrl(movie?.backdrop_path, "w200") ?? ""})`,
            }}
            className="bg-cover bg-center bg-no-repeat"
          >
            <div className="bg-linear-to-b to-gray-950 pt-24 backdrop-blur-lg backdrop-brightness-50 xl:h-screen xl:pt-16">
              <div className="container mx-auto flex flex-col gap-2 px-4">
                <Breadcrumb
                  items={[
                    { label: "Home", link: "/" },
                    { label: "Movies", link: "/movies" },
                    { label: movie?.title },
                  ]}
                />

                <div className="flex w-full flex-col items-center gap-2 xl:flex-row xl:gap-8">
                  <div className="flex aspect-2/3 w-2/3 items-center justify-center rounded-3xl bg-gray-900 outline outline-gray-900 xl:w-1/5">
                    {movie?.poster_path ? (
                      <img
                        src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <ImageOff className="size-8 stroke-gray-700" />
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center xl:w-2/4 xl:items-start xl:text-start">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold xl:text-4xl">
                        {movie?.title}
                      </span>
                      {movie?.tagline && (
                        <span className="text-sm text-gray-300 italic">
                          {movie.tagline}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-300">
                      {movie?.genres &&
                        movie?.genres.map((genre, index) => (
                          <span key={genre.id}>
                            <span>{genre.name}</span>
                            {index < movie?.genres.length - 1 && ", "}
                          </span>
                        ))}
                    </p>
                    <p className="text-sm text-gray-400">
                      {movie?.release_date && (
                        <span>{getYearFromDate(movie?.release_date)}</span>
                      )}

                      {movie?.runtime && (
                        <span>
                          <> • </>
                          <>{movie.runtime}</>
                          <> min</>
                        </span>
                      )}
                      {movie?.production_countries && (
                        <span>
                          <> • </>
                          <>
                            {movie?.production_countries.map(
                              (country, index) => (
                                <span key={country.iso_3166_1}>
                                  <span>{country.name}</span>
                                  {index <
                                    movie?.production_countries.length - 1 &&
                                    ", "}
                                </span>
                              ),
                            )}
                          </>
                        </span>
                      )}
                    </p>

                    <RattingBar
                      scores={scores}
                      scoresIsLoading={scoresIsLoading}
                      tmdbScore={movie?.vote_average}
                    />

                    {movie?.overview && (
                      <span className="text-gray-200 xl:pe-36">
                        {movie.overview}
                      </span>
                    )}
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
                          {artist.character}
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
              { label: "Cast", content: <CastTab id={`${id}`} /> },
            ]}
          />

          <MediaSection
            title="Recommendation"
            loading={recommendationsIsLoading}
            media={recommendations}
          />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
