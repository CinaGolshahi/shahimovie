import HeroSlider from "./components/hero-slider";
import NewMovies from "./components/new-movies";

const Home = () => {
  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <NewMovies />
    </div>
  );
};

export default Home;
