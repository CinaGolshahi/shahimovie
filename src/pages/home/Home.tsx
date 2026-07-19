import { Link } from "react-router-dom";
import HeroSlider from "./components/hero-slider";
import { ChevronRight } from "lucide-react";
import mockMovies from "../../data/movies.mock.";
import MovieCard from "../../components/shared/movie-card";

const Home = () => {
  return (
    <div className="pbs-10 xl:pbs-20">
      <HeroSlider />

      <div className="container mx-auto mt-20 flex flex-col gap-4 bg-gray-900/50 p-4 xl:rounded-lg">
        <div className="flex items-center justify-between px-2">
          <p className="text-lg font-semibold">New movies</p>
          <Link to={"/"} className="flex items-center gap-0.5 text-blue-500">
            <span>See more</span>
            <ChevronRight className="mt-0.5 size-5" />
          </Link>
        </div>

        <div className="flex scrollbar-none grid-cols-6 gap-4 overflow-auto xl:grid">
          {mockMovies.slice(0, 6).map((movie) => (
            <MovieCard
              title={movie.title}
              releaseYear={movie.releaseYear}
              posterSrc={movie.posterSrc}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
