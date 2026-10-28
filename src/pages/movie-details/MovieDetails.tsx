import { Link, useParams } from "react-router-dom";

import { Bookmark, Film, ImageOff } from "lucide-react";

import MediaSection from "../../components/common/media-section";
import Breadcrumb from "../../components/ui/breadcrumb";
import Button from "../../components/ui/button";
import TabsPattern from "../../components/ui/tabs-pattern";
import { CastTab, DetailsTab, LoadingScreen } from "./components";

import {
  useCredits,
  useMovie,
  useRecommendations,
  useScores,
} from "../../hooks";

import RattingBar from "../../components/shared/ratting-bar";
import { getTmdbImageUrl, getYearFromDate } from "../../utils";
import NotFoundPage from "../not-found";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { movie, movieIsLoading, movieError } = useMovie({ id: id ?? "" });
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

  if (movieIsLoading || creditsIsLoading) {
    return <LoadingScreen />;
  } else if (movieError) {
    return <NotFoundPage />;
  } else {
    return (
      <div className="flex flex-col gap-10">
        <div
          style={{
            backgroundImage: `url(${getTmdbImageUrl(movie?.backdrop_path, "w200") ?? ""})`,
          }}
          className="-mt-20 w-full bg-cover bg-center"
        >
          <div className="w-full bg-linear-to-b to-gray-950 px-2 pt-24 backdrop-blur-md backdrop-brightness-50 xl:px-0 xl:pt-16 xl:pb-10">
            <div className="container mx-auto flex flex-col gap-2.5 xl:px-10">
              <Breadcrumb
                items={[
                  { label: "Home", link: "/" },
                  { label: "Movies", link: "/movies" },
                  { label: movie?.title },
                ]}
              />
              <div className="flex flex-col items-center xl:flex-row">
                <div className="flex flex-col items-center gap-2 text-center select-none xl:w-3/4 xl:flex-row xl:gap-8 xl:text-start">
                  <div className="aspect-2/3 w-2/3 shrink-0 rounded-3xl bg-gray-800 p-px xl:w-1/3">
                    {movie?.poster_path ? (
                      <img
                        src={`${getTmdbImageUrl(movie?.poster_path, "w500")}`}
                        className="size-full rounded-3xl object-cover"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center rounded-full bg-gray-800">
                        <ImageOff className="size-8 stroke-gray-700" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 xl:items-start">
                    <p className="flex flex-col gap-1">
                      <span className="text-xl font-bold xl:text-4xl">
                        {movie?.title}
                      </span>
                      <span className="text-sm text-gray-300 italic">
                        {movie?.tagline ?? ""}
                      </span>
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
                      <span>
                        {getYearFromDate(movie?.release_date ?? "Unknown")}
                      </span>
                      <> • </>
                      <span>{movie?.runtime ?? "Unknown"} min</span>
                      <> • </>
                      {movie?.production_countries
                        ? movie?.production_countries.map((country, index) => (
                            <span key={country.iso_3166_1}>
                              <span>{country.name}</span>
                              {index < movie?.production_countries.length - 1 &&
                                ", "}
                            </span>
                          ))
                        : "Unknown"}
                    </p>
                    <RattingBar
                      scores={scores}
                      scoresIsLoading={scoresIsLoading}
                      tmdbScore={movie?.vote_average}
                    />
                    <p className="text-gray-200 xl:pe-36">
                      {movie?.overview ?? "Unknown"}
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
                {cast?.slice(0, 8).map((artist) => (
                  <Link
                    key={artist.id}
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
                      {artist.character}
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
              { label: "Details", content: <DetailsTab id={`${id}`} /> },
              { label: "Cast", content: <CastTab id={`${id}`} /> },
            ]}
          />
        </div>

        <MediaSection
          title="Recommendation"
          loading={recommendationsIsLoading}
          media={recommendations}
        />
      </div>
    );
  }
};

export default MovieDetails;
