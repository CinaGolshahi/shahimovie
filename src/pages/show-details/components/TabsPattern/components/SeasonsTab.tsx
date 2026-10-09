import { ImageOff, Loader2 } from "lucide-react";
import { useState } from "react";
import useShowById from "../../../../../hooks/useShowById";
import { getTmdbImageUrl } from "../../../../../utils";

const SeasonsTab = () => {
  const { isLoadingShow, show } = useShowById();
  const [selectedSeason, setSelectedSeason] = useState(0);

  return (
    <>
      {isLoadingShow ? (
        <div className="flex h-20 w-full items-center justify-center">
          <Loader2 className="animate-spin stroke-blue-500 duration-300" />
        </div>
      ) : (
        <div className="grid scrollbar-none grid-cols-10 gap-4 overflow-auto">
          {show?.seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season.season_number)}
              className={`flex cursor-pointer flex-col items-start gap-2 opacity-50 transition-all delay-75 duration-300 ${selectedSeason === season.season_number && "opacity-100"}`}
            >
              {season.poster_path ? (
                <img
                  src={`${getTmdbImageUrl(season.poster_path, "w500")}`}
                  alt=""
                  className="aspect-2/3 rounded-lg object-cover"
                />
              ) : (
                <div className="flex aspect-2/3 size-full items-center justify-center rounded-lg bg-gray-900">
                  <ImageOff className="size-8 stroke-gray-700" />
                </div>
              )}
              <p className="px-1">{season.name}</p>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SeasonsTab;
