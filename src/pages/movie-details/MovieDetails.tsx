import { Link } from "react-router-dom";

import {
  BadgeDollarSign,
  Bookmark,
  CalendarDays,
  Clapperboard,
  ImageOff,
  Info,
  Languages,
  Play,
} from "lucide-react";

import {
  RatingColorFrom10,
  RatingColorFrom100,
  RatingColorFrom5,
} from "../../components/common/rating-color";
import Button from "../../components/ui/button";
import useGetCreditsOfMovieId from "../../hooks/useGetCreditsOfMovieId";
import useGetMovieById from "../../hooks/useGetMovieById";
import useMovieDirectors from "../../hooks/useMovieDirectors";
import {
  formatCurrency,
  formatReleaseDate,
  getTmdbImageUrl,
  getYearFromDate,
} from "../../utils";
import { LoadingScreen, TabsPattern } from "./components";

const MovieDetails = () => {
  const { movie, isLoading } = useGetMovieById();
  const { cast, isLoadingCredits } = useGetCreditsOfMovieId();
  const { directors } = useMovieDirectors();

  if (isLoading && isLoadingCredits) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${getTmdbImageUrl(movie?.backdrop_path, "w200") ?? ""})`,
          }}
          className="w-full bg-cover bg-fixed bg-center xl:-mt-20"
        >
          <div className="w-full bg-linear-to-b to-gray-950 pt-10 backdrop-blur-md backdrop-brightness-50 xl:pt-20 xl:pb-10">
            <div className="container mx-auto flex flex-col gap-4 xl:px-10">
              <div className="flex flex-col items-center xl:flex-row">
                <div className="flex flex-col items-center gap-2 text-center xl:w-3/4 xl:flex-row xl:gap-8 xl:text-start">
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
                  <div className="flex flex-col items-center justify-center gap-2 px-2 xl:items-start xl:px-0">
                    <p className="text-xl font-bold xl:text-4xl">
                      {movie?.title}
                    </p>
                    <p className="text-sm text-gray-300">
                      {movie?.genres &&
                        movie?.genres.map((genre, index) => (
                          <>
                            <span>{genre.name}</span>
                            {index < movie?.genres.length - 1 && ", "}
                          </>
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
                            <>
                              <span key={index}>{country.name}</span>
                              {index < movie?.production_countries.length - 1 &&
                                ", "}
                            </>
                          ))
                        : "Unknown"}
                    </p>
                    <p className="text-gray-200 xl:pe-36">
                      {movie?.overview ?? "Unknown"}
                    </p>
                    <div className="flex gap-2 py-4">
                      <Button>
                        <Play className="size-5" />
                        <span className="">Watch</span>
                      </Button>
                      <Button variant="btn-secondary" size="btn-squ-md">
                        <Bookmark />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex w-full flex-col divide-y divide-gray-700 rounded-2xl border border-gray-700 bg-gray-600/20 p-2 xl:my-0 xl:w-1/4">
                  <div className="flex items-center gap-4 pb-2">
                    <div className="flex w-1/3 shrink-0 flex-col items-center rounded-xl border border-gray-700 bg-gray-600/20 p-3">
                      <div>
                        <RatingColorFrom5
                          rating={4}
                          className="text-4xl font-bold"
                        />
                        <span className="text-xs text-gray-300">/5</span>
                      </div>
                      <span className="text-xs">SHAHIMOVIE</span>
                    </div>
                    <div className="flex w-2/3 flex-col gap-2 text-sm">
                      <p className="relative flex justify-between gap-2">
                        <span className="flex items-center gap-2 font-bold">
                          <span className="size-2 rounded-full bg-yellow-500"></span>
                          IMDb:
                        </span>
                        <span>
                          <RatingColorFrom10 rating={8} />
                          <span className="text-xs text-gray-300"> / 10</span>
                        </span>
                      </p>
                      <p className="relative flex justify-between gap-2">
                        <span className="flex items-center gap-2 font-bold">
                          <span className="size-2 rounded-full bg-blue-500"></span>
                          TMDB:
                        </span>
                        <span>
                          <RatingColorFrom10 rating={4} />
                          <span className="text-xs text-gray-300"> / 10</span>
                        </span>
                      </p>
                      <p className="relative flex justify-between gap-2">
                        <span className="flex items-center gap-2 font-bold">
                          <span className="size-2 rounded-full bg-red-500"></span>
                          Rotten Tomatoes:
                        </span>
                        <span>
                          <RatingColorFrom100 rating={78} />
                          <span className="text-xs text-gray-300"> / 100</span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-2 px-1 py-2 text-sm">
                    <p className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-gray-300">
                        <Info className="size-4" />
                        Status:
                      </span>
                      <span>{movie?.status ?? "Unknown"}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-gray-300">
                        <CalendarDays className="size-4" />
                        Release:
                      </span>
                      <span>{formatReleaseDate(movie?.release_date)}</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-gray-300">
                        <Languages className="size-4" />
                        Language:
                      </span>
                      <span>
                        {movie?.spoken_languages?.[0]?.name ?? "Unknown"}
                      </span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-gray-300">
                        <Clapperboard className="size-4" />
                        Director:
                      </span>
                      {directors.length > 0 ? (
                        <span>
                          {directors
                            .map((director) => director.name)
                            .join(", ")}
                        </span>
                      ) : (
                        "Unknown"
                      )}
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold text-gray-300">
                        <BadgeDollarSign className="size-4" />
                        Budget:
                      </span>
                      <span>{formatCurrency(movie?.budget)}</span>
                    </p>
                  </div>
                  <div className="relative mt-2 aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-950/50">
                      <Play className="size-14 rounded-full bg-gray-900 p-2 outline outline-gray-600" />
                    </div>
                    <img
                      src={`${movie?.backdrop_path && getTmdbImageUrl(movie?.backdrop_path, "w200")}`}
                      className="h-full rounded-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="hidden grid-cols-8 items-stretch gap-4 xl:grid">
                {cast?.slice(0, 8).map((artist, index) => (
                  <Link
                    key={index}
                    to={`/artist/${artist.id}`}
                    className="flex aspect-2/3 w-full flex-col items-center gap-1 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80"
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
        <div className="w-full 2xl:px-10">
          <TabsPattern />
        </div>
      </div>
    );
  }
};

export default MovieDetails;
