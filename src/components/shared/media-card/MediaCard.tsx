import type { IMediaCardProps } from "./MediaCard.type";
import MovieCard from "./movie-card";
import PersonCard from "./person-card";
import ShowCard from "./show-card";

const MediaCard = (props: IMediaCardProps) => {
  const { media, className } = props;

  if (media.media_type === "movie")
    return <MovieCard movie={media} className={className} />;

  if (media.media_type === "tv")
    return <ShowCard show={media} className={className} />;

  if (media.media_type === "person")
    return <PersonCard person={media} className={className} />;
};

export default MediaCard;
