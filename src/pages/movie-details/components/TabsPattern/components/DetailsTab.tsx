import { Loader2 } from "lucide-react";
import useGetMovieById from "../../../../../hooks/useGetMovieById";
import { formatCurrency, formatReleaseDate } from "../../../../../utils";

const DetailsTab = () => {
  const { movie, isLoading } = useGetMovieById();
  return (
    <>
      {isLoading ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-2 divide-gray-800 *:flex *:justify-between *:px-2 *:text-end xl:grid-cols-4 xl:divide-x">
            <p>
              <span>Status:</span>
              <span className="text-gray-400">{movie?.status ?? "N/A"}</span>
            </p>
            <p>
              <span>Release Date:</span>
              <span className="text-gray-400">
                {formatReleaseDate(movie?.release_date)}
              </span>
            </p>
            <p>
              <span>Runtime:</span>
              <span className="text-gray-400">{movie?.runtime ?? "N/A"}</span>
            </p>
            <p>
              <span>Genres:</span>
              <span className="text-gray-400">
                {movie?.genres?.length
                  ? movie?.genres.map((genre, index) => (
                      <span key={index}>
                        <span>{genre.name}</span>
                        {index < movie?.genres.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
            <p>
              <span>Countries:</span>
              <span className="text-gray-400">
                {movie?.production_countries?.length
                  ? movie?.production_countries.map((country, index) => (
                      <span key={index}>
                        <span>{country.name}</span>
                        {index < movie?.production_countries.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
            <p>
              <span>Languages:</span>
              <span className="text-gray-400">
                {movie?.spoken_languages?.length
                  ? movie?.spoken_languages.map((language, index) => (
                      <span key={index}>
                        <span>{language.english_name}</span>
                        {index < movie?.spoken_languages.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
            <p>
              <span>Budget:</span>
              <span className="text-gray-400">
                {formatCurrency(movie?.budget)}
              </span>
            </p>
            <p>
              <span>Tagline:</span>
              <span className="text-gray-400">{movie?.tagline ?? "N/A"}</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsTab;
