const EpisodeLoader = () => {
  return (
    <div className="flex min-w-11/12 flex-col gap-2 rounded-xl bg-gray-900 p-2 *:animate-pulse **:*:bg-gray-950 *:not-last:bg-gray-950 md:w-full">
      <div className="aspect-video w-full rounded-lg"></div>
      <div className="h-4 w-52 rounded-full"></div>
      <div className="h-4 w-full rounded-full"></div>
      <div className="h-4 w-full rounded-full"></div>
      <div className="flex gap-2 *:h-6 *:w-24 *:rounded-full">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default EpisodeLoader;
