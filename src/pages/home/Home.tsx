import {
  MoviesSection,
  ShowsSection,
} from "../../components/common/movies-section";
import { useMovies, useShows } from "../../hooks";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies, moviesIsLoading } = useMovies({ sortBy: "popularity.desc" });
  const { shows, showsIsLoading } = useShows({ sortBy: "popularity.desc" });

  return (
    <div className="flex flex-col gap-20 pbs-6 xl:pbs-0">
      <HeroSlider />

      <MoviesSection
        title="Movies"
        link="/movies"
        loading={moviesIsLoading}
        movies={movies}
      />

      <ShowsSection
        title="TV Shows"
        link="/shows"
        loading={showsIsLoading}
        shows={shows}
      />
    </div>
  );
};

export default Home;
