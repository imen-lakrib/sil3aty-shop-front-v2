import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function ImagesSwiper() {
  return (
    <>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          spaceBetween={30}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          autoplay={true}
        >
          <SwiperSlide
            style={{ width: "200px", height: "250px", borderRadius: "18px", overflow: "hidden" }}
          >
            <img
              src="/HIW2img.png"
              alt="slide_image"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "200px", height: "250px", borderRadius: "18px", overflow: "hidden" }}
          >
            <img
              src="/HIW3img.png"
              alt="slide_image"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "200px", height: "250px", borderRadius: "18px", overflow: "hidden" }}
          >
            <img
              src="/HIW4img.png"
              alt="slide_image"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "200px", height: "250px", borderRadius: "18px", overflow: "hidden" }}
          >
            <img
              src="/HIW1img.png"
              alt="slide_image"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
