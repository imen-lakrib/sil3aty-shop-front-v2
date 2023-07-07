import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import CartStyle1 from '../../theme/CartStyle1';
import CartStyle2 from '../../theme/CartStyle2';
import Arrows from '../../theme/Arrows';

export default function Carouseltest({ cartStyle, categories }) {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      {/* Render custom navigation arrows */}
      <Arrows
        prev={() => swiperRef.slidePrev()}
        next={() => swiperRef.slideNext()}
      />
      <Swiper
        onSwiper={setSwiperRef}
        // slidesPerView={1} // Show 1 slide by default
        spaceBetween={30}
        navigation={{
          prevEl: '.custom-prev-arrow',
          nextEl: '.custom-next-arrow',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          
          420: {
            slidesPerView: 1, // Show 2 slides on tablets (viewport width >= 640px)
          },
          960: {
            slidesPerView: 2, // Show 2 slides on tablets (viewport width >= 640px)
          },
          1200: {
            slidesPerView: 3, // Show 2 slides on tablets (viewport width >= 640px)
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            {cartStyle === 'CartStyle1' ? (
              <CartStyle1 data={category} />
            ) : (
              <CartStyle2 data={category} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
