import { Imdb, RottenTomatoes, TheMovieDatabase } from "@thesvg/react";
import type { IOMDbResponse } from "../../../types/omdb";
import {
  RatingColorFrom10,
  RatingColorFrom100,
} from "../../common/rating-color";

interface IRattingBarProps {
  scores: IOMDbResponse | undefined;
  scoresIsLoading: boolean | undefined;
  tmdbScore: number | undefined;
}

const RattingBar = (props: IRattingBarProps) => {
  const { scores, scoresIsLoading, tmdbScore } = props;
  return (
    <>
      {scoresIsLoading ? (
        <div className="my-1 h-6 w-64 animate-pulse rounded-full bg-gray-50/10"></div>
      ) : (
        <div className="my-1 flex items-center gap-4 transition-all delay-75 duration-300">
          <div className="flex items-center gap-2">
            <RottenTomatoes className="size-5" />
            <RatingColorFrom100
              rating={Number(scores?.Ratings?.[1]?.Value.slice(0, -1))}
            />
          </div>
          <div className="flex items-center gap-2">
            <Imdb className="size-5 bg-[#F5C518] fill-black" />
            <RatingColorFrom10 rating={Number(scores?.imdbRating)} />
          </div>
          <div className="flex items-center gap-2">
            <TheMovieDatabase className="size-5" />
            <RatingColorFrom10 rating={Number(tmdbScore?.toFixed(1))} />
          </div>
        </div>
      )}
    </>
  );
};

export default RattingBar;
