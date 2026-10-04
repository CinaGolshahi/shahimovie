import MediaSection from "../../components/common/MediaSection";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection
        title="New Movies"
        link="/movies"
        type="movie"
        sort="primary_release_date.desc"
      />
      <MediaSection
        title="Popular Movies"
        link="/movies"
        type="movie"
        sort="popularity.desc"
      />

      <MediaSection title="Shows" link="/shows" type="show" />
    </div>
  );
};

export default Home;
