import { Loader2 } from "lucide-react";
import { useShow } from "../../../../hooks";
import { formatReleaseDate } from "../../../../utils";

interface IDetailsTab {
  id: string;
}

const DetailsTab = (props: IDetailsTab) => {
  const { id } = props;
  const { show, isLoadingShow } = useShow({ id: id });

  return (
    <>
      {isLoadingShow ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-2 divide-gray-800 *:flex *:items-center *:justify-between *:gap-2 *:text-end **:first:text-gray-50 **:last:text-gray-400 xl:grid-cols-4 xl:divide-x xl:*:px-4 [&>*:nth-child(4n)]:border-0">
            <p>
              <span>Status:</span>
              <span>{show?.status ?? "N/A"}</span>
            </p>
            <p>
              <span>First Air Date: </span>
              <span>{formatReleaseDate(show?.first_air_date)}</span>
            </p>
            <p>
              <span>Last Air Date: </span>
              <span>{formatReleaseDate(show?.last_air_date)}</span>
            </p>
            <p>
              <span>Created By:</span>
              <span>
                {show?.created_by.map((creator, index) => (
                  <span key={index}>
                    <span>{creator.name}</span>
                    {index < show?.created_by.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </p>
            <p>
              <span>Number of Seasons: </span>
              <span>{show?.number_of_seasons}</span>
            </p>
            <p>
              <span>Number of Episodes: </span>
              <span>{show?.number_of_episodes}</span>
            </p>
            <p>
              <span>Countries:</span>
              <span>
                {show?.production_countries?.length
                  ? show?.production_countries.map((country, index) => (
                      <span key={index}>
                        <span>{country.name}</span>
                        {index < show?.production_countries.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
            <p>
              <span>Languages:</span>
              <span>
                {show?.spoken_languages?.length
                  ? show?.spoken_languages.map((language, index) => (
                      <span key={index}>
                        <span>{language.english_name}</span>
                        {index < show?.spoken_languages.length - 1 && ", "}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsTab;
