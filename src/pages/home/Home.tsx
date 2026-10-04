import MediaSection from "../../components/common/MediaSection";
import useMovies from "../../hooks/useMovies";
import useShows from "../../hooks/useShows";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies } = useMovies();
  const { shows } = useShows();

  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection title="Movies" link="/movies" movie={movies} />

      <MediaSection title="Shows" link="/shows" show={shows} />
    </div>
  );
};

export default Home;
