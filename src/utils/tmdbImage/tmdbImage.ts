const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

type ImageSize = "w200" | "w300" | "w500" | "w780" | "original";

const getTmdbImageUrl = (
  path: string | null | undefined,
  size: ImageSize = "original",
): string | null => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}${size}${path}`;
};

export default getTmdbImageUrl;
