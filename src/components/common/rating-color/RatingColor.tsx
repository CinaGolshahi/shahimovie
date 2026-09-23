import type { IRatingColorProps } from "./rating-color.type";

function getRatingColorClassFrom5(rating: number): string {
  if (rating >= 4.5) return "text-green-500";
  if (rating >= 3.5) return "text-lime-500";
  if (rating >= 2.75) return "text-yellow-500";
  if (rating >= 2) return "text-orange-500";
  return "text-red-500";
}
function getRatingColorClassFrom10(rating: number): string {
  if (rating >= 9) return "text-green-500";
  if (rating >= 7) return "text-lime-500";
  if (rating >= 5.5) return "text-yellow-500";
  if (rating >= 4) return "text-orange-500";
  return "text-red-500";
}
function getRatingColorClassFrom100(rating: number): string {
  if (rating >= 90) return "text-green-500";
  if (rating >= 70) return "text-lime-500";
  if (rating >= 55) return "text-yellow-500";
  if (rating >= 40) return "text-orange-500";
  return "text-red-500";
}

const RatingColorFrom5 = (props: IRatingColorProps) => {
  const { rating, className } = props;
  if (!rating) return "Unknown";
  return (
    <span className={`${className} ${getRatingColorClassFrom5(rating)}`}>
      {rating}
    </span>
  );
};

const RatingColorFrom10 = (props: IRatingColorProps) => {
  const { rating, className } = props;
  if (!rating) return "Unknown";
  return (
    <span className={`${className} ${getRatingColorClassFrom10(rating)}`}>
      {rating}
    </span>
  );
};

const RatingColorFrom100 = (props: IRatingColorProps) => {
  const { rating, className } = props;
  if (!rating) return "Unknown";
  return (
    <span className={`${className} ${getRatingColorClassFrom100(rating)}`}>
      {rating}
    </span>
  );
};

export { RatingColorFrom10, RatingColorFrom100, RatingColorFrom5 };
