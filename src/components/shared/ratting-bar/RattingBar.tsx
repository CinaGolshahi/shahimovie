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

  if (scoresIsLoading) {
    return (
      <div className="my-1 h-6 w-64 animate-pulse rounded-full bg-gray-50/10"></div>
    );
  }
  if (scores && tmdbScore) {
    if (scores.Ratings || tmdbScore > 0) {
      return (
        <div className="my-1 flex items-center gap-4 transition-all delay-75 duration-300">
          {tmdbScore && (
            <div className="flex items-center gap-2">
              <TheMovieDatabase className="size-5" />
              <RatingColorFrom10 rating={Number(tmdbScore.toFixed(1))} />
            </div>
          )}
          {scores.Ratings.map((score, index) => (
            <div key={index} className="flex items-center gap-2">
              {score.Source === "Rotten Tomatoes" && (
                <>
                  <RottenTomatoes className="size-5" />
                  <RatingColorFrom100
                    rating={Number(score.Value.slice(0, -1))}
                  />
                </>
              )}
              {score.Source === "Internet Movie Database" && (
                <>
                  <Imdb className="size-5 bg-[#F5C518] fill-black" />
                  <RatingColorFrom10
                    rating={Number(score.Value.slice(0, -3))}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      );
    }
  }

  return <></>;
};

export default RattingBar;
