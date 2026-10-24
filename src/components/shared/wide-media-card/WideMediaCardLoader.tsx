const WideMediaCardLoader = () => {
  return (
    <div className="aspect-1.9/1 flex w-full gap-2 rounded-2xl bg-gray-900 p-2">
      <div className="aspect-2/3 w-1/3 animate-pulse rounded-xl bg-gray-950"></div>
      <div className="flex flex-col gap-2 py-2">
        <div className="h-4 w-32 animate-pulse rounded-full bg-gray-950"></div>
        <div className="h-2 w-20 animate-pulse rounded-full bg-gray-950"></div>
        <div className="h-4 w-48 animate-pulse rounded-full bg-gray-950"></div>
        <div className="h-4 w-48 animate-pulse rounded-full bg-gray-950"></div>
        <div className="h-4 w-32 animate-pulse rounded-full bg-gray-950"></div>
      </div>
    </div>
  );
};

export default WideMediaCardLoader;
