import { ImageOff, Loader2 } from "lucide-react";
import { useState } from "react";
import useSeason from "../../../../../hooks/useSeason";
import useShowById from "../../../../../hooks/useShowById";
import { getTmdbImageUrl } from "../../../../../utils";

const SeasonsTab = () => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const { isLoadingShow, show } = useShowById();
  const { season, seasonIsLoading } = useSeason(selectedSeason);

  return (
    <div className="flex flex-col gap-4">
      {isLoadingShow ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <div className="flex gap-4">
          {show?.seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season.season_number)}
              className={`flex cursor-pointer flex-col items-start gap-1 transition-all duration-300 ${selectedSeason === season.season_number ? "opacity-100 grayscale-0" : "opacity-50 grayscale-75"}`}
            >
              {season.poster_path ? (
                <img
                  src={`${getTmdbImageUrl(season.poster_path, "w500")}`}
                  alt=""
                  className="aspect-2/3 h-56 rounded-lg object-cover"
                />
              ) : (
                <div className="flex aspect-2/3 items-center justify-center rounded-lg bg-gray-900">
                  <ImageOff className="size-8 stroke-gray-700" />
                </div>
              )}
              <p className="px-1">{season.name}</p>
            </button>
          ))}
        </div>
      )}

      {seasonIsLoading ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {season?.episodes.map((episode) => (
            <div
              key={episode.id}
              className="flex flex-col gap-2 rounded-xl bg-gray-900 p-2"
            >
              <img
                src={`${getTmdbImageUrl(episode.still_path, "w500")}`}
                alt=""
                className="aspect-video rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1 px-1">
                <p className="font-bold">{episode.name}</p>
                <p className="line-clamp-3 text-gray-300">{episode.overview}</p>
              </div>
              <div className="flex justify-start gap-1 pt-2 text-sm *:rounded-full *:border *:border-gray-800 *:px-2">
                <span>
                  <span>S{episode.season_number}</span>
                  <span> • </span>
                  <span>E{episode.episode_number}</span>
                </span>
                <span>{episode.runtime} min</span>
                {episode.episode_type === "finale" && (
                  <span className="flex items-center gap-2 border-red-500">
                    <span className="size-1.5 rounded-full bg-red-500"></span>
                    <span>Finale</span>
                  </span>
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
