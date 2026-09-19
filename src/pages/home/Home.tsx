import HeroSlider from "./components/hero-slider";
import NewMovies from "./components/new-movies";
import UpdatedShows from "./components/updated-shows";

const Home = () => {
  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <NewMovies />
      <UpdatedShows />
    </div>
  );
};

export default Home;
