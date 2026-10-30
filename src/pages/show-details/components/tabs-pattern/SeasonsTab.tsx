import { ImageOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { useSeason, useShow } from "../../../../hooks";
import { formatReleaseDate, getTmdbImageUrl } from "../../../../utils";
import EpisodeLoader from "./EpisodeLoader";

interface ISeasonTab {
  id: string;
}

const SeasonsTab = (props: ISeasonTab) => {
  const { id } = props;
  const [selectedSeason, setSelectedSeason] = useState(1);

  const { showIsLoading, show } = useShow({ id: id });
  const { season, seasonIsLoading } = useSeason({
    id: id,
    seasonNumber: selectedSeason,
  });

  return (
    <div className="flex flex-col gap-10">
      {showIsLoading ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <div className="flex gap-4 overflow-auto md:grid md:grid-cols-5 xl:grid-cols-10">
          {show?.seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season.season_number)}
              className={`flex w-1/3 min-w-1/3 cursor-pointer flex-col items-start gap-1 transition-all duration-300 md:w-full ${selectedSeason === season.season_number ? "opacity-100 grayscale-0" : "opacity-50 grayscale-75"}`}
            >
              {season.poster_path ? (
                <img
                  src={`${getTmdbImageUrl(season.poster_path, "w500")}`}
                  alt=""
                  className="aspect-2/3 w-full rounded-lg object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-2/3 w-full items-center justify-center rounded-lg bg-gray-900">
                  <ImageOff className="size-8 stroke-gray-700" />
                </div>
              )}
              <p className="px-1">{season.name}</p>
            </button>
          ))}
        </div>
      )}

      {seasonIsLoading ? (
        <div className="flex gap-4 overflow-auto md:grid md:grid-cols-2 xl:grid-cols-4">
          <EpisodeLoader />
          <EpisodeLoader />
          <EpisodeLoader />
          <EpisodeLoader />
        </div>
      ) : (
        <div className="flex gap-4 overflow-auto md:grid md:grid-cols-2 xl:grid-cols-4">
          {season?.episodes.map((episode) => (
            <div
              key={episode.id}
              className="relative flex min-w-11/12 flex-col gap-2 rounded-xl bg-gray-900 p-2 pb-10 md:w-full"
            >
              {episode.still_path ? (
                <div className="relative">
                  <img
                    src={`${getTmdbImageUrl(episode.still_path, "w500")}`}
                    alt=""
                    className="aspect-video w-full rounded-lg bg-gray-950 object-cover"
                    loading="lazy"
                  />
                  {episode.episode_type === "finale" && (
                    <span className="absolute inset-e-2 bottom-2 flex items-center gap-2 rounded-full border border-gray-50/20 bg-gray-50/10 px-2 text-sm">
                      <span className="size-1.5 rounded-full bg-red-500"></span>
                      <span>Finale</span>
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-gray-950 object-cover">
                  <ImageOff className="size-8 stroke-gray-700" />
                </div>
              )}
              <div className="flex flex-col gap-1 px-1">
                <p className="line-clamp-1 font-bold">
                  {episode.name ?? "Unknown"}
                </p>
                <p className="line-clamp-2 text-gray-300">
                  {episode.overview ?? "Unknown"}
                </p>
              </div>
              <div className="absolute bottom-2 flex justify-start gap-1 pt-2 text-sm *:rounded-full *:border *:border-gray-800 *:px-2">
                {episode.season_number && episode.episode_number && (
                  <span>
                    <span>S{episode.season_number}</span>
                    <span> • </span>
                    <span>E{episode.episode_number}</span>
                  </span>
                )}
                {episode.runtime && <span>{episode.runtime} min</span>}
                {episode.air_date && (
                  <span>{formatReleaseDate(episode.air_date)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonsTab;
