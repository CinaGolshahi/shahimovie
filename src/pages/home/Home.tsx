import useNewMovies from "../../../src/hooks/useNewMovies";
import MediaSection from "../../components/common/MediaSection";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { newMovies } = useNewMovies();

  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection title="New Movies" link="/movies" media={newMovies} />
    </div>
  );
};

export default Home;
