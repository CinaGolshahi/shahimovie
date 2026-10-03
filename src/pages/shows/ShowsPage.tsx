import ShowCard from "../../components/shared/show-card";
import useShows from "../../hooks/useShows";

const ShowsPage = () => {
  const { hasMore, shows, showsIsLoading, showsLoadMore } = useShows();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2 xl:px-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={showsLoadMore}
          disabled={showsIsLoading}
          className="w-full cursor-pointer rounded-xl bg-blue-500 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
        >
          {showsIsLoading ? "Loading..." : "See More"}
        </button>
      )}
    </div>
  );
};

export default ShowsPage;
