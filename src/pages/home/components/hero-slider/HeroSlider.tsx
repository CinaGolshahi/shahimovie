import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/style.css";

import mockMovies from "../../../../data/movies.mock.";
import { Link } from "react-router-dom";

const HeroSlider = () => {
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
      {mockMovies.map((movie) => (
        <SwiperSlide
          key={movie.id}
          className="group relative w-2/3! rounded-lg"
        >
          <picture>
            <source media="(min-width: 1280px)" srcSet={movie.backdropSrc} />

            <img
              src={movie.posterSrc}
              alt={`${movie.title} (${movie.releaseYear})`}
              className="size-full rounded-lg object-cover"
            />
          </picture>

          <Link
            to={"/"}
            className="bg-blur invisible absolute inset-0 hidden flex-col items-start justify-end gap-1 rounded-lg p-20 pb-16 opacity-0 transition-all delay-100 duration-300 group-hover:visible group-hover:pb-20 group-hover:opacity-100 xl:flex"
          >
            <p className="text-4xl font-bold">{movie.title}</p>
            <span className="text-2xl font-bold">{`(${movie.releaseYear})`}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
