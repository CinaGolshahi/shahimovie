import MediaSection from "../../components/common/MediaSection";
import useNewMovies from "../../hooks/useMovies";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { movies } = useNewMovies();

  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection title="New Movies" link="/movies/new" media={movies} />
    </div>
  );
};

export default Home;
