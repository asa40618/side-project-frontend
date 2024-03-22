import React from 'react'
// import  { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

// 使用方法：
// <CustomSwiper cards={cards} slidesPerView={'2'} spaceBetween = '30' />;

const CustomSwiper = ({
  cards = [],
  slidesPerView = '2',
  spaceBetween = '30',
}) => {
  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween}
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
        style={{ backgroundColor: '#212A2E' }}
        initialSlide={1}
      >
        {cards.map((Card, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomSwiper
