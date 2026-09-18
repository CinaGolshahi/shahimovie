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
          className={`aspect-2/3 w-2/3! rounded-lg bg-gray-800 xl:aspect-video xl:w-3/4! 2xl:w-2/3! ${isLoading && "animate-pulse"}`}
        >
          <Link
            to={`/movie/${movie.id}`}
            className="group relative w-full rounded-lg"
          >
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${getTmdbImageUrl(movie.backdrop_path, "w780")}${movie.backdrop_path}`}
              />

              <img
                src={`${getTmdbImageUrl(movie.poster_path, "w500")}`}
                alt={`${movie.title} (${getYearFromDate(movie.release_date)})`}
                className="size-full rounded-lg object-cover"
                onLoad={() => setIsLoading(false)}
              />
            </picture>
            <div className="absolute inset-0 hidden items-end justify-start gap-6 rounded-lg bg-linear-to-b from-transparent to-gray-950/80 p-20 pb-16 opacity-0 transition-all delay-75 duration-300 group-hover:pb-20 group-hover:opacity-100 group-hover:backdrop-blur-lg xl:flex">
              <img
                src={`${getTmdbImageUrl(movie.poster_path, "w300")}`}
                alt=""
                className="hidden w-1/5 rounded-xl xl:block"
              />
              <div className="hidden flex-col gap-2 pb-6 xl:flex">
                <p className="text-4xl font-bold">{movie.title}</p>
                <span className="text-2xl font-bold">{`(${getYearFromDate(movie.release_date)})`}</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
