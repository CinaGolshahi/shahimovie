import { useTrending } from "../../../../hooks";

import { Autoplay, EffectCards, Navigation } from "swiper/modules";
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
          modules={[Autoplay, EffectCards, Navigation]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          navigation={{}}
          loop={true}
          className="aspect-2/3 w-2/3! xl:aspect-video"
        >
          {trending?.slice(0, 10).map((item) => (
            <SwiperSlide
              key={item.id}
              className="size-full rounded-lg bg-gray-800"
            >
              {item.media_type === "movie" && <MovieSlide item={item} />}
              {item.media_type === "tv" && <TVShowSlide item={item} />}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;
