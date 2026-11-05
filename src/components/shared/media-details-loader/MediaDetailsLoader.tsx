const MediaDetailsLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col gap-2 bg-gray-950 pt-16 *:container *:mx-auto xl:h-screen">
      <div className="flex justify-center md:justify-start">
        <div className="h-10 w-56 animate-pulse rounded-full bg-gray-900"></div>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row xl:gap-8">
        <div className="aspect-2/3 w-2/3 animate-pulse rounded-3xl bg-gray-900 md:w-1/3 lg:w-1/4 xl:w-1/5"></div>
        <div className="flex flex-col items-center gap-4 md:w-2/3 md:items-start lg:w-3/4 xl:w-2/4">
          <div className="h-8 w-56 animate-pulse rounded-2xl bg-gray-900 xl:w-96"></div>
          <div className="h-4 w-32 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-56 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-96 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-96 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-96 animate-pulse rounded-full bg-gray-900"></div>
          <div className="h-4 w-64 animate-pulse rounded-full bg-gray-900"></div>
        </div>
      </div>
      <div className="mt-0 flex flex-col gap-4 ps-4 xl:mt-8 xl:ps-0">
        <div className="h-6 w-32 animate-pulse rounded-full bg-gray-900"></div>
        <div className="flex grid-cols-8 gap-4 overflow-auto xl:grid">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="flex min-w-1/3 flex-col items-center gap-2 *:rounded-full md:min-w-1/5 lg:min-w-1/6"
            >
              <div className="aspect-square w-full animate-pulse bg-gray-900"></div>
              <div className="h-4 w-3/4 animate-pulse bg-gray-900"></div>
              <div className="h-4 w-2/4 animate-pulse bg-gray-900"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10 h-56 animate-pulse rounded-2xl bg-gray-900"></div>
    </div>
  );
};

export default MediaDetailsLoader;
