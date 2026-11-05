import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSliderLoader = () => {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      allowTouchMove={false}
      simulateTouch={false}
      keyboard={false}
      mousewheel={false}
      className="pointer-events-none aspect-2/3 w-2/3 md:aspect-video md:w-4/5 xl:w-2/3"
    >
      {Array.from({ length: 3 }, (_, index) => (
        <SwiperSlide
          key={index}
          className="size-full animate-pulse rounded-lg bg-gray-900"
        ></SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSliderLoader;
