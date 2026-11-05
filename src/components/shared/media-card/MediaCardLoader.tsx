interface IMediaCardLoaderProps {
  key: number;
}
const MediaCardLoader = ({ key }: IMediaCardLoaderProps) => {
  return (
    <div
      key={key}
      className="aspect-2/3 w-full min-w-2/3 animate-pulse rounded-2xl bg-gray-900 md:min-w-1/3 lg:min-w-1/4"
    ></div>
  );
};

export default MediaCardLoader;
