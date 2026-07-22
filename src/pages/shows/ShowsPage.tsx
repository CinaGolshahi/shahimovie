import ShowCard from "../../components/shared/show-card";
import { mockTVShows } from "../../data/tvshows.mock";

const ShowsPage = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-2 md:grid-cols-2 xl:grid-cols-4">
      {mockTVShows.map((show) => (
        <ShowCard show={show} />
      ))}
    </div>
  );
};

export default ShowsPage;
