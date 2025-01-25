import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper(); // Access the Swiper instance

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>⮜</button>
      <button onClick={() => swiper.slideNext()}>⮞</button>
    </div>
  );
};

export default SwiperNavButtons;
