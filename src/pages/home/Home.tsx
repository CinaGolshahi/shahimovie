import MediaSection from "../../components/common/media-section";
import { useMovies, useShows } from "../../hooks";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies, moviesIsLoading } = useMovies({ sortBy: "popularity.desc" });
  const { shows, showsIsLoading } = useShows({ sortBy: "popularity.desc" });

  return (
    <div className="flex flex-col gap-20 pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection
        title="Movies"
        link="/movies"
        loading={moviesIsLoading}
        media={movies}
      />

      <MediaSection
        title="TV Shows"
        link="/shows"
        loading={showsIsLoading}
        media={shows}
      />
    </div>
  );
};

export default Home;
