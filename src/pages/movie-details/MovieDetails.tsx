import { Link, useParams } from "react-router-dom";
import { mockMovies } from "../../data/movies.mock.";
import NotFoundPage from "../not-found";
import Button from "../../components/ui/button";
import { Plus } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const targetMovie = mockMovies.find((movie) => movie.id === Number(id));

  return !targetMovie ? (
    <NotFoundPage />
  ) : (
    <div className="xl:-mt-20">
      <div className="relative h-screen">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={targetMovie.backdropSrc}
          />
          <img
            src={targetMovie.posterSrc}
            alt={targetMovie.title}
            className="size-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-2xl">
          <div className="container mx-auto flex h-full flex-col items-center gap-4 pt-6 xl:flex-row xl:justify-start xl:gap-10 xl:px-10">
            <div className="mx-auto flex w-2/3 flex-col items-center gap-2 xl:m-0 xl:w-1/4">
              <img
                src={targetMovie.posterSrc}
                alt={targetMovie.title}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-4 px-4 text-center xl:w-1/3 xl:items-start xl:gap-6 xl:px-0 xl:text-start">
              <div className="flex flex-col gap-1">
                <p className="text-xl xl:text-4xl">
                  <span className="font-bold">{targetMovie.title}</span>
                  <span>{` (${targetMovie.releaseYear})`}</span>
                </p>
                <p className="text-sm text-gray-50">
                  {targetMovie.genre.map((genre, index) => (
                    <>
                      <Link key={index} to={"/"}>
                        {" "}
                        {genre}
                      </Link>
                      {index < targetMovie.genre.length - 1 && ","}
                    </>
                  ))}
                </p>
              </div>
              <p className="text-gray-200">{targetMovie.overview}</p>
              <div className="flex gap-2">
                <Button variant="btn-primary">Watch trailer</Button>
                <Button variant="btn-secondary" size="btn-squ-md">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
