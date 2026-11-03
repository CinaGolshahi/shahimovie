interface IMediaCardLoaderProps {
  key: number;
}
const MediaCardLoader = ({ key }: IMediaCardLoaderProps) => {
  return (
    <div
      key={key}
      className="aspect-2/3 w-full min-w-2/3 animate-pulse rounded-2xl bg-gray-900"
    ></div>
  );
};

export default MediaCardLoader;
