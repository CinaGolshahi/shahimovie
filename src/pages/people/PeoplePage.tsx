import {
  WideMediaCard,
  WideMediaCardLoader,
} from "../../components/shared/wide-media-card";
import Breadcrumb from "../../components/ui/breadcrumb";
import { usePopularPeople } from "../../hooks";

const PeoplePage = () => {
  const {
    popularPeople,
    popularPeopleIsLoading,
    hasMorePopularPeople,
    loadMorePopularPeople,
  } = usePopularPeople();

  return (
    <div className="container mx-auto flex flex-col gap-4 p-2 pt-6 xl:-mt-4 xl:px-8 xl:pt-0">
      <Breadcrumb
        items={[{ label: "Home", link: "/" }, { label: "Artists" }]}
      />
      {popularPeopleIsLoading && popularPeople.length === 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
          <WideMediaCardLoader />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularPeople.map((person) => (
              <WideMediaCard key={person.id} media={person} />
            ))}
          </div>
          {hasMorePopularPeople && (
            <button
              onClick={loadMorePopularPeople}
              disabled={popularPeopleIsLoading}
              className="w-full cursor-pointer rounded-xl bg-blue-500 py-3 disabled:cursor-not-allowed disabled:bg-blue-900"
            >
              {popularPeopleIsLoading ? "Loading..." : "See More"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default PeoplePage;
