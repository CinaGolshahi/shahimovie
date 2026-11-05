import { Imdb, RottenTomatoes, TheMovieDatabase } from "@thesvg/react";
import type { IOMDbResponse } from "../../../types/omdb";
import {
  RatingColorFrom10,
  RatingColorFrom100,
} from "../../common/rating-color";

interface IRatingBarProps {
  scores: IOMDbResponse | undefined;
  scoresIsLoading: boolean | undefined;
  tmdbScore: number | undefined;
  className?: string;
}

const RatingBar = (props: IRatingBarProps) => {
  const { scores, scoresIsLoading, tmdbScore, className } = props;

  return (
    <>
      {scoresIsLoading ? (
        <div className="my-1 h-6 w-64 animate-pulse rounded-full bg-gray-50/10"></div>
      ) : (
        <div
          className={`${className} my-1 flex flex-wrap items-center gap-x-4 transition-all delay-75 duration-300`}
        >
          {tmdbScore !== undefined && tmdbScore > 0 && (
            <div className="flex items-center gap-2">
              <TheMovieDatabase className="size-5" />
              <RatingColorFrom10 rating={Number(tmdbScore.toFixed(1))} />
            </div>
          )}
          {scores?.Ratings &&
            scores.Ratings.map((score) => (
              <div key={score.Source} className="flex items-center gap-2">
                {score.Source === "Rotten Tomatoes" && (
                  <>
                    <RottenTomatoes className="size-5" />
                    <RatingColorFrom100 rating={parseFloat(score.Value)} />
                  </>
                )}
                {score.Source === "Internet Movie Database" && (
                  <>
                    <Imdb className="size-5 bg-[#F5C518] fill-black" />
                    <RatingColorFrom10 rating={parseFloat(score.Value)} />
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default RatingBar;
