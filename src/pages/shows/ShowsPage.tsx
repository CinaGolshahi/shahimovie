import ShowCard from "../../components/shared/show-card";
import Breadcrumb from "../../components/ui/breadcrumb";
import { useShows } from "../../hooks";

const ShowsPage = () => {
  const { hasMoreShows, shows, showsIsLoading, loadMoreShows } = useShows({});

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2 xl:px-8 -mt-4">
      <Breadcrumb items={[{ label: "Home", link: "/" }, { label: "Shows" }]} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      {hasMoreShows && (
        <button
          onClick={loadMoreShows}
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
