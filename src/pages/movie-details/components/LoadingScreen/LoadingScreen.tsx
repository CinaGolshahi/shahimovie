const LoadingScreen = () => {
  return (
    <div>
      <div className="-mt-20 w-full bg-gray-950">
        <div className="w-full py-20">
          <div className="container mx-auto flex flex-col gap-4 px-10">
            <div className="flex items-center">
              <div className="flex w-3/4 gap-8">
                <div className="aspect-2/3 w-1/3 shrink-0 animate-pulse rounded-3xl bg-gray-800 p-px"></div>
                <div className="flex flex-col justify-center gap-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="mb-2 h-10 w-96 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="h-5 w-56 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="mb-2 h-5 w-36 animate-pulse rounded-xl bg-gray-800"></div>
                    <div className="mb-4 flex flex-col gap-2">
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
              <div className="flex w-1/4 flex-col divide-y divide-gray-600 rounded-2xl bg-gray-900 p-2">
                <div className="flex w-full pb-2">
                  <div className="w-1/3 animate-pulse rounded-xl bg-gray-800"></div>
                  <div className="flex w-2/3 flex-col gap-2 px-1 py-2">
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2 px-1 py-2">
                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-800"></div>
                </div>
                <div className="relative mt-2 aspect-video">
                  <div className="absolute inset-0 flex animate-pulse items-center justify-center rounded-lg bg-gray-950/50"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2">
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
                <div className="h-2 w-24 animate-pulse rounded-full bg-gray-800"></div>
                <div className="h-2 w-16 animate-pulse rounded-full bg-gray-800"></div>
              </div>
              <div className="flex aspect-9/16 w-full flex-col items-center gap-2 rounded-2xl p-2 text-center text-sm transition-all delay-75 duration-300 hover:opacity-80">
                <div className="aspect-2/3 h-44 animate-pulse rounded-xl bg-gray-800 object-cover"></div>
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
