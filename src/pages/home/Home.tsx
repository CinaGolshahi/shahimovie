import {
  MoviesSection,
  ShowsSection,
} from "../../components/common/movies-section";
import { useMovies, useShows } from "../../hooks";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies } = useMovies({ sortBy: "popularity.desc" });
  const { shows } = useShows({ sortBy: "popularity.desc" });

  return (
    <div className="flex flex-col gap-20 pbs-6 xl:pbs-0">
      <HeroSlider />

      <MoviesSection title="Movies" link="/movies" movies={movies} />

      <ShowsSection title="TV Shows" link="/shows" shows={shows} />
    </div>
  );
};

export default Home;
