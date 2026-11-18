const formatRuntime = (runtime: number | undefined) => {
  if (!runtime || runtime < 0) return "N/A";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours > 0 ? `${hours}h` : ""}${minutes > 0 ? ` ${minutes}m` : ""}`;
};

export default formatRuntime;
