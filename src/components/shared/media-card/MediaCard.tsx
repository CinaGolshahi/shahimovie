import type { IMediaCardProps } from "./MediaCard.type";
import MovieCard from "./movie-card";
import ShowCard from "./show-card";

const MediaCard = (props: IMediaCardProps) => {
  const { media } = props;

  if (media.media_type === "movie")
    return <MovieCard key={media.id} movie={media} />;

  if (media.media_type === "tv")
    return <ShowCard key={media.id} show={media} />;
};

export default MediaCard;
