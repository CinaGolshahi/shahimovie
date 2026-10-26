const LoadingScreen = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 xl:flex-row xl:items-start">
        <div className="aspect-2/3 w-2/3 animate-pulse rounded-3xl bg-gray-900 xl:w-1/6"></div>
        <div className="flex w-1/2 flex-col items-center gap-2 xl:items-start xl:pt-10">
          <div className="h-8 w-80 animate-pulse rounded-full bg-gray-900"></div>
          <div className="ms-1 h-2 w-24 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-56 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-80 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-80 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-80 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-80 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-56 animate-pulse rounded-full bg-gray-900"></div>
        </div>
      </div>
      <div className="pt-10">
        <div className="mb-6 h-6 w-48 animate-pulse rounded-full bg-gray-900"></div>
        <div className="flex grid-cols-8 gap-4 overflow-auto xl:grid">
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
          <div className="flex w-full min-w-1/3 flex-col gap-2">
            <div className="aspect-2/3 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-4 h-4 animate-pulse rounded-2xl bg-gray-900"></div>
            <div className="mx-10 h-2 animate-pulse rounded-2xl bg-gray-900"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
