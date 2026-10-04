import {
  MoviesSection,
  ShowsSection,
} from "../../components/common/MoviesSection";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 pbs-6 xl:pbs-0">
      <HeroSlider />

      <MoviesSection
        title="New Movies"
        link="/movies"
        sort="primary_release_date.desc"
      />

      <ShowsSection title="TV Shows" link="/shows" />
    </div>
  );
};

export default Home;
