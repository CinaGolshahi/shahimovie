import {
  BadgeDollarSign,
  Bookmark,
  Clapperboard,
  Languages,
  Play,
  ShieldAlert,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/button";
import tmdbApi from "../../services/tmdb";
import type { IMovie } from "../../types/movies";
import getTmdbImageUrl from "../../utils/tmdbImage";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await tmdbApi.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovieById();
  }, [id]);

  return (
    <div className="-mt-20">
      <div className="relative h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-b to-gray-950 backdrop-blur-md backdrop-brightness-50"></div>
        <img
            src={`${getTmdbImageUrl(movie?.backdrop_path, "w500")}`}
          alt=""
          className="size-full object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto flex items-center justify-between px-14">
            <div className="flex basis-2/3 gap-8">
              <div className="w-1/3 shrink-0">
                <img
                    src={`${getTmdbImageUrl(movie?.poster_path, "w500")}`}
                    className="size-full rounded-3xl object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2">
                <p className="text-4xl font-bold">{movie?.title}</p>
                <p className="ps-1 text-sm text-gray-300">
                  {/* {movie?.genre.map((genre, index) => (
                    <React.Fragment key={index}>
                      <Link
                        to={"/"}
                        className="transition-all delay-75 duration-300 hover:text-gray-50"
                      >
                        {genre}
                      </Link>
                      {index < movie?.genre.length - 1 && ","}
                    </React.Fragment>
                  ))} */}
                </p>
                <p className="ps-1 text-sm text-gray-400">
                  <span>{movie?.release_date.slice(0, 4)}</span>
                  <> • </>
                  <span>{movie?.runtime} min</span>
                  <> • </>
                  {/* <span>{movie?.country}</span> */}
                </p>
                <p className="ps-1">{movie?.overview}</p>
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

            <div className="flex h-full basis-1/4 flex-col divide-y divide-gray-600 rounded-2xl border border-gray-600 bg-gray-600/50 p-2">
              <div className="flex items-center gap-4 pb-2">
                <div className="flex w-1/3 shrink-0 flex-col items-center rounded-xl border border-gray-50/30 bg-gray-50/10 p-3">
                  <div>
                    {/* <RatingColorFrom5
                      rating={movie?.ratings.shahimovie}
                      className="text-4xl font-bold"
                    /> */}
                    <span className="text-xs text-gray-300">/5</span>
                  </div>
                  <span className="text-xs">SHAHIMOVIE</span>
                </div>
                <div className="flex w-2/3 flex-col gap-2 text-sm">
                  <p className="relative flex justify-between gap-2">
                    <span className="flex items-center gap-2 font-bold">
                      <div className="size-2 rounded-full bg-yellow-500"></div>
                      IMDb:
                    </span>
                    <span>
                      {/* <RatingColorFrom10 rating={movie?.ratings.imdb} /> */}
                      <span className="text-xs text-gray-300"> / 10</span>
                    </span>
                  </p>
                  <p className="relative flex justify-between gap-2">
                    <span className="flex items-center gap-2 font-bold">
                      <div className="size-2 rounded-full bg-blue-500"></div>
                      TMDB:
                    </span>
                    <span>
                      {/* <RatingColorFrom10 rating={movie?.ratings.tmdb} /> */}
                      <span className="text-xs text-gray-300"> / 10</span>
                    </span>
                  </p>
                  <p className="relative flex justify-between gap-2">
                    <span className="flex items-center gap-2 font-bold">
                      <div className="size-2 rounded-full bg-red-500"></div>
                      Rotten Tomatoes:
                    </span>
                    <span>
                      {/* <RatingColorFrom100
                        rating={movie?.ratings.rottenTomatoes}
                      /> */}
                      <span className="text-xs text-gray-300"> / 100</span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 px-1 py-2 text-sm">
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-bold text-gray-300">
                    <Clapperboard className="size-4" />
                    Director:
                  </span>
                  {/* <span>{movie?.director}</span> */}
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-bold text-gray-300">
                    <ShieldAlert className="size-4" />
                    Release:
                  </span>
                  <span>{movie?.release_date.slice(0, 4)}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-bold text-gray-300">
                    <ShieldAlert className="size-4" />
                    Age Rating:
                  </span>
                  {/* <span>+{movie?.ageRating}</span> */}
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-bold text-gray-300">
                    <Languages className="size-4" />
                    Language:
                  </span>
                  <span>{movie?.original_language}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-bold text-gray-300">
                    <BadgeDollarSign className="size-4" />
                    Budget:
                  </span>
                  <span>{movie?.budget} $</span>
                </p>
              </div>

              <div className="relative mt-2">
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-950/50">
                  <Play className="size-10 rounded-full bg-gray-900 p-2" />
                </div>
                <img
                    src={`${getTmdbImageUrl(movie?.backdrop_path, "w500")}`}
                  className="h-full rounded-lg object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
