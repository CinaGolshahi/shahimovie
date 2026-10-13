import {
  MoviesSection,
  ShowsSection,
} from "../../components/common/MoviesSection";
import useMovies from "../../hooks/useMovies";
import useShows from "../../hooks/useShows";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies } = useMovies({ sortBy: "primary_release_date.desc" });
  const { shows } = useShows({ sortBy: "popularity.desc" });

  return (
    <div className="flex flex-col gap-20 pbs-6 xl:pbs-0">
      <HeroSlider />

      <MoviesSection title="New Movies" link="/movies" movies={movies} />

      <ShowsSection title="TV Shows" link="/shows" shows={shows} />
    </div>
  );
};

export default Home;
