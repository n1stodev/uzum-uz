import React from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

function Banner() {
    return (
        <div className='banner container'>
            <Swiper
                loop={true} navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide><img src="https://images.uzum.uz/cgqfulfg49devoadeui0/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cghdvrnhj8j9g69b8g3g/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cgqmsq7g49devoadh81g/main_page_banner.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner