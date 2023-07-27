import React, {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import CartStyle2 from '../carts/CartStyle2';
import Arrows from '../Arrows';
import { Box } from '@mui/material';
import ProductCart from '../carts/ProductCart';

export default function Carouseltest({ cartStyle, data, numberDisplay }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      {/* Render custom navigation arrows */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom:"20px" }}>
        <Arrows
          prev={() => swiperRef.slidePrev()}
          next={() => swiperRef.slideNext()}
        />

      </Box>
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
          350:{slidesPerView: 1,},
          750: {slidesPerView: 2, },
          960: {slidesPerView: numberDisplay-1 },
          1200: { slidesPerView: numberDisplay},
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {cartStyle === 'ProductCart' ? (
              <ProductCart data={item} />
            ) : (
              <CartStyle2 data={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
