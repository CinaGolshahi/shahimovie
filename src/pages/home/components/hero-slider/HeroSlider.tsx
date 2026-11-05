import { useTrending } from "../../../../hooks";

import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import HeroSliderLoader from "./HeroSliderLoader";

import MovieSlide from "./components/MovieSlide";
import TVShowSlide from "./components/TVShowSlide";
import "./styles/style.css";

const HeroSlider = () => {
  const { trending, trendingIsLoading } = useTrending("week");

  return (
    <div className="container mx-auto overflow-hidden">
      {trendingIsLoading ? (
        <HeroSliderLoader />
      ) : (
        <Swiper
          effect={"cards"}
          modules={[Autoplay, EffectCards]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="aspect-2/3 w-2/3 md:aspect-video md:w-4/5 xl:w-2/3"
        >
          {trending?.slice(0, 10).map((item) => (
            <SwiperSlide
              key={item.id}
              className="size-full rounded-lg bg-gray-800"
            >
              {item.media_type === "movie" && <MovieSlide movie={item} />}
              {item.media_type === "tv" && <TVShowSlide show={item} />}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;
