import MediaSection from "../../components/common/MediaSection";
import useShows from "../../hooks/useShows";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  const { shows } = useShows();

  return (
    <div className="pbs-6 xl:pbs-0">
      <HeroSlider />

      <MediaSection
        title="New Movies"
        link="/movies"
        sort="primary_release_date.desc"
      />
      <MediaSection
        title="Popular Movies"
        link="/movies"
        sort="popularity.desc"
      />

      <MediaSection title="Shows" link="/shows" show={shows} />
    </div>
  );
};

export default Home;
