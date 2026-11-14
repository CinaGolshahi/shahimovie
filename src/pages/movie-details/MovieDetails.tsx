import { Link, useParams } from "react-router-dom";

import { ImageOff } from "lucide-react";

import {
  useCredits,
  useMovie,
  useMovieDirectors,
  useRecommendations,
  useScores,
} from "../../hooks";

import {
  formatCurrency,
  formatReleaseDate,
  getTmdbImageUrl,
  getYearFromDate,
} from "../../utils";

import { CastTab } from "../../components/ui/tabs-pattern/components";

import MediaSection from "../../components/common/media-section";
import MediaDetailsLoader from "../../components/shared/media-details-loader";
import RattingBar from "../../components/shared/rating-bar";
import Breadcrumb from "../../components/ui/breadcrumb";
import TabsPattern from "../../components/ui/tabs-pattern";
import { DetailsTab } from "../../components/ui/tabs-pattern/components";
import useExternalIds from "../../hooks/useExternalIds";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { movie, movieIsLoading } = useMovie({ id: id ?? "" });

  const { directors } = useMovieDirectors({ id: `${movie?.id}` });

  const { externalIds } = useExternalIds({ type: "movie", id: movie?.id });
  const { scores, scoresIsLoading } = useScores({
    imdbId: externalIds?.imdb_id,
  });

  const { cast, creditsIsLoading } = useCredits({
    id: id ?? "",
    mediaType: "movie",
    creditsType: "credits",
  });

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
            <div className="bg-linear-to-b to-gray-950 pt-24 backdrop-blur-lg backdrop-brightness-50 md:pt-28 xl:pt-16">
              <div className="container mx-auto flex flex-col gap-2 px-4 md:px-2 xl:px-4">
                <Breadcrumb
                  items={[
                    { label: "Home", link: "/" },
                    { label: "Movies", link: "/movies" },
                    { label: movie?.title },
                  ]}
                />

                <div className="flex w-full flex-col items-center gap-2 md:flex-row md:gap-4 xl:gap-8">
                  <div className="flex aspect-2/3 w-2/3 items-center justify-center rounded-3xl bg-gray-900 outline outline-gray-900 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    {movie?.poster_path ? (
                      <img
                        src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <ImageOff className="size-8 stroke-gray-700" />
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-center md:w-2/3 md:items-start md:text-start lg:w-3/4 xl:w-2/4">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
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
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-0 xl:pt-8">
                  <p className="relative flex items-center ps-8 text-xl font-bold before:absolute before:inset-s-0 before:h-2 before:w-6 before:rounded-full before:bg-blue-600">
                    Top Stars
                  </p>
                  <div className="flex grid-cols-8 items-stretch gap-4 overflow-auto xl:grid">
                    {cast?.slice(0, 8).map((artist) => (
                      <Link
                        key={artist.id}
                        to={`/artist/${artist.id}`}
                        className="flex aspect-2/3 w-full min-w-1/3 flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80 md:min-w-1/5 lg:min-w-1/6"
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
              {
                label: "Details",
                content: (
                  <DetailsTab
                    items={[
                      { label: "Status:", value: movie?.status },
                      {
                        label: "Release Date:",
                        value: formatReleaseDate(movie?.release_date),
                      },
                      { label: "Runtime:", value: `${movie?.runtime} min` },
                      {
                        label: "Director:",
                        value: `${directors.map((director, index) => `${director.name}${index < directors.length - 1 && ", "}`)}`,
                      },
                      {
                        label: "Countries:",
                        value: `${movie?.production_countries.map((country) => ` ${country.name}`)}`,
                      },
                      {
                        label: "Budget:",
                        value: `${formatCurrency(movie?.budget)}`,
                      },
                      {
                        label: "Collection:",
                        value: movie?.belongs_to_collection?.name || "N/A",
                      },
                    ]}
                  />
                ),
              },
              {
                label: "Cast",
                content: (
                  <CastTab cast={cast} creditsIsLoading={creditsIsLoading} />
                ),
              },
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
