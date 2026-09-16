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
import getTmdbImageUrl from "../../../../utils/tmdbImage";

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
          className="group relative w-2/3! rounded-lg xl:w-3/4! 2xl:w-2/3!"
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${getTmdbImageUrl(movie.backdrop_path, "original")}${movie.backdrop_path}`}
            />

            <img
              src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
              alt={`${movie.title} (${movie.release_date.slice(0, 4)})`}
              className="w-full rounded-lg object-cover lg:h-[573.75px]! xl:h-[573.65px]!"
            />
          </picture>

          <Link
            to={`/movie/${movie.id}`}
            className="absolute inset-0 items-end justify-start gap-6 rounded-lg p-20 pb-16 transition-all delay-100 duration-300 group-hover:pb-20 group-hover:opacity-100 xl:flex xl:bg-gray-900/60 xl:opacity-0 xl:backdrop-blur-lg"
          >
            <img
              src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
              alt=""
              className="hidden w-1/5 rounded-xl xl:block"
            />
            <div className="hidden flex-col gap-2 pb-6 xl:flex">
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
