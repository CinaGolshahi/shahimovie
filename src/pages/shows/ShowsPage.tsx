import { MediaCard, MediaCardLoader } from "../../components/shared/media-card";
import Breadcrumb from "../../components/ui/breadcrumb";
import { useShows } from "../../hooks";

const ShowsPage = () => {
  const { hasMoreShows, shows, showsIsLoading, loadMoreShows } = useShows({});

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2 pt-6 xl:-mt-4 xl:px-8 xl:pt-0">
      {showsIsLoading && shows.length === 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
        </div>
      ) : (
        <>
          <Breadcrumb
            items={[{ label: "Home", link: "/" }, { label: "Shows" }]}
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {shows.map((show) => (
              <MediaCard key={show.id} media={show} />
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
        </>
      )}
    </div>
  );
};

export default ShowsPage;
