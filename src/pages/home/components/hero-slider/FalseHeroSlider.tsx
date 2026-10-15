import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FalseHeroSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      allowTouchMove={false}
      simulateTouch={false}
      keyboard={false}
      mousewheel={false}
      className="pointer-events-none aspect-2/3 w-2/3! xl:aspect-video"
    >
      <SwiperSlide className="size-full rounded-lg bg-gray-900"></SwiperSlide>
      <SwiperSlide className="size-full rounded-lg bg-gray-900"></SwiperSlide>
      <SwiperSlide className="size-full rounded-lg bg-gray-900"></SwiperSlide>
    </Swiper>
  );
};

export default FalseHeroSlider;
