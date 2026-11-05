interface IWideMediaCardLoaderProps {
  key: number;
}
const WideMediaCardLoader = ({ key }: IWideMediaCardLoaderProps) => {
  return (
    <div
      key={key}
      className="flex aspect-video max-h-40 w-full gap-2 rounded-2xl bg-gray-900/50 p-2 outline-2 outline-gray-900/50"
    >
      <div className="aspect-2/3 h-full animate-pulse rounded-xl bg-gray-900"></div>
      <div className="flex flex-col gap-2 pt-2 *:rounded-full *:bg-gray-900">
        <div className="h-6 w-48 animate-pulse"></div>
        <div className="h-4 w-20 animate-pulse"></div>
        <div className="h-4 w-56 animate-pulse"></div>
        <div className="h-4 w-56 animate-pulse"></div>
        <div className="h-4 w-40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default WideMediaCardLoader;
