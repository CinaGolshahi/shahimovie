const formatReleaseDate = (dateString: string | null | undefined): string => {
  if (!dateString) return "N/A";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export default formatReleaseDate;
