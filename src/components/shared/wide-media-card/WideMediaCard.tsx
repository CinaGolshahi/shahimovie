import type { IMediaCardProps } from "./WideMediaCard.type";
import MovieCard from "./wide-movie-card";
import WidePersonCard from "./wide-person-card";
import ShowCard from "./wide-show-card";

const MediaCard = (props: IMediaCardProps) => {
  const { media, className } = props;

  if (media.media_type === "movie")
    return <MovieCard key={media.id} movie={media} className={className} />;

  if (media.media_type === "tv")
    return <ShowCard key={media.id} show={media} className={className} />;

  if (media.media_type === "person")
    return <WidePersonCard person={media} className={className} />;
};

export default MediaCard;
