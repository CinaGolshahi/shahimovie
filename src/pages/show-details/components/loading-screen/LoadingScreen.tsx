const LoadingScreen = () => {
  return (
    <div>
      <div className="w-full bg-gray-950 xl:-mt-20">
        <div className="w-full pt-10 xl:py-20">
          <div className="container mx-auto flex flex-col gap-4 xl:px-10">
            <div className="flex flex-col items-center xl:flex-row">
              <div className="flex flex-col items-center gap-8 xl:w-3/4 xl:flex-row">
                <div className="aspect-2/3 w-2/3 shrink-0 animate-pulse rounded-3xl bg-gray-800 p-px xl:w-1/3"></div>
                <div className="flex flex-col justify-center gap-6">
                  <div className="flex flex-col items-center justify-center gap-2 xl:items-start">
                    <div className="mb-2 h-10 w-96 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="h-5 w-56 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="mb-2 h-5 w-36 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="mb-2 h-5 w-48 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="mb-4 flex flex-col items-center gap-2 xl:items-start">
                      <div className="h-6 w-80 animate-pulse rounded-xl bg-gray-800"></div>
                      <div className="h-6 w-80 animate-pulse rounded-xl bg-gray-800"></div>
                      <div className="h-6 w-72 animate-pulse rounded-xl bg-gray-800"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-10 w-28 animate-pulse rounded-full bg-gray-800"></div>
                      <div className="size-10 animate-pulse rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden grid-cols-8 gap-2 xl:grid">
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-square w-full animate-pulse rounded-full bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default LoadingScreen;
