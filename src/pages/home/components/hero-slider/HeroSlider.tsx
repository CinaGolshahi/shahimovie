import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/style.css";

import { Link } from "react-router-dom";
import useTrendingMoviesWeekly from "../../../../services/useTrendingMoviesWeekly";

const HeroSlider = () => {
  const { movies } = useTrendingMoviesWeekly();

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={{}}
      className="container"
    >
      {movies?.slice(0, 8).map((movie) => (
        <SwiperSlide
          key={movie.id}
          className="group relative w-2/3! rounded-lg"
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />

            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={`${movie.title} (${movie.release_date.slice(0, 4)})`}
              className="size-full rounded-lg object-cover"
            />
          </picture>

          <Link
            to={`/movie/${movie.id}`}
            className="invisible absolute inset-0 hidden items-end justify-start gap-6 rounded-lg bg-gray-900/60 p-20 pb-16 opacity-0 backdrop-blur-lg transition-all delay-100 duration-300 group-hover:visible group-hover:pb-20 group-hover:opacity-100 xl:flex"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              className="w-1/5 rounded-xl"
            />
            <div className="flex flex-col gap-2 pb-6">
              <p className="text-4xl font-bold">{movie.title}</p>
              <span className="text-2xl font-bold">{`(${movie.release_date.slice(0, 4)})`}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
