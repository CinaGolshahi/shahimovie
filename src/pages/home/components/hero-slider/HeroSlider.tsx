import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./styles/style.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import useTrendingMoviesWeekly from "../../../../hooks/useTrendingMoviesWeekly";
import { getTmdbImageUrl, getYearFromDate } from "../../../../utils";

const HeroSlider = () => {
  const { movies } = useTrendingMoviesWeekly();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      modules={[Autoplay, EffectCards, Navigation]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
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
          className={`group relative w-2/3! rounded-lg bg-gray-800 xl:w-3/4! 2xl:w-2/3! ${isLoading && "animate-pulse"}`}
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${getTmdbImageUrl(movie.backdrop_path, "w780")}${movie.backdrop_path}`}
            />

            <img
              src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
              alt={`${movie.title} (${getYearFromDate(movie.release_date)})`}
              className="w-full rounded-lg object-cover lg:h-[573.75px]! xl:h-[573.65px]!"
              onLoad={() => setIsLoading(false)}
            />
          </picture>

          <Link
            to={`/movie/${movie.id}`}
            className="absolute inset-0 items-end justify-start gap-6 rounded-lg p-20 pb-16 transition-all delay-100 duration-300 group-hover:pb-20 group-hover:opacity-100 xl:flex xl:bg-gray-900/60 xl:opacity-0 xl:backdrop-blur-lg"
          >
            <img
              src={`${getTmdbImageUrl(movie.poster_path, "w300")}`}
              alt=""
              className="hidden w-1/5 rounded-xl xl:block"
            />
            <div className="hidden flex-col gap-2 pb-6 xl:flex">
              <p className="text-4xl font-bold">{movie.title}</p>
              <span className="text-2xl font-bold">{`(${getYearFromDate(movie.release_date)})`}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
