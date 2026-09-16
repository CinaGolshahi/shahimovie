const LoadingScreen = () => {
  return (
    <div className="-mt-20 flex h-screen w-full bg-gray-950">
      <div className="container mx-auto flex items-center justify-between px-14">
        <div className="flex basis-2/3 gap-8">
          <div className="aspect-2/3 w-1/3 shrink-0 animate-pulse rounded-3xl bg-gray-800 p-px"></div>
          <div className="flex flex-1 flex-col items-start justify-center gap-2">
            <div className="mb-2 h-10 w-96 animate-pulse rounded-xl bg-gray-800"></div>
            <p className="h-4 w-32 animate-pulse rounded-xl bg-gray-800"></p>
            <p className="mb-2 h-4 w-32 animate-pulse rounded-xl bg-gray-800"></p>

            <p className="flex flex-col items-start gap-2 text-sm">
              <span className="h-5 w-80 animate-pulse rounded-xl bg-gray-800"></span>
              <span className="h-5 w-80 animate-pulse rounded-xl bg-gray-800"></span>
              <span className="h-5 w-72 animate-pulse rounded-xl bg-gray-800"></span>
            </p>
            <div className="flex gap-2 py-4">
              <div className="h-10 w-28 animate-pulse rounded-full bg-gray-800 text-transparent"></div>
              <div className="size-10 animate-pulse rounded-full bg-gray-800 text-transparent"></div>
            </div>
          </div>
        </div>

        <div className="h-[450px] w-[356px] animate-pulse divide-y divide-gray-600 rounded-3xl bg-gray-800 p-4">
          <div className="h-1/4 w-full"></div>
          <div className="h-1/4 w-full"></div>
          <div className="h-1/2 w-full pt-4">
            <div className="size-full rounded-2xl bg-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
