import { Loader2 } from "lucide-react";
import useGetMovieById from "../../../../../hooks/useGetMovieById";
import useMovieDirectors from "../../../../../hooks/useMovieDirectors";
import { formatCurrency, formatReleaseDate } from "../../../../../utils";

const DetailsTab = () => {
  const { movie, isLoading } = useGetMovieById();
  const { directors } = useMovieDirectors();

  return (
    <>
      {isLoading ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-2 divide-gray-800 *:flex *:items-center *:justify-between *:gap-2 *:text-end **:first:text-gray-50 **:last:text-gray-400 xl:grid-cols-4 xl:divide-x xl:*:px-4 [&>*:nth-child(4n)]:border-0">
            <p>
              <span>Status:</span>
              <span>{movie?.status ?? "N/A"}</span>
            </p>
            <p>
              <span>Release Date:</span>
              <span>{formatReleaseDate(movie?.release_date)}</span>
            </p>
            <p>
              <span>Runtime:</span>
              <span>{movie?.runtime ?? "N/A"} min</span>
            </p>
            <p>
              <span>Genres:</span>
              <span>
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
              <span>Director:</span>
              <span>
                {directors.length
                  ? directors.map((director, index) => (
                      <span key={index}>
                        <span>{director.name}</span>
                        {index < directors.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
            <p>
              <span>Countries:</span>
              <span>
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
              <span>
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
              <span>{formatCurrency(movie?.budget)}</span>
            </p>
            <p>
              <span>Tagline:</span>
              <span>{movie?.tagline ?? "N/A"}</span>
            </p>
            <p>
              <span>Collection:</span>
              <span>{movie?.belongs_to_collection?.name ?? "N/A"}</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsTab;
