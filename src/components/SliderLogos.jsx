"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import styles from "../styles/components/sliderLogo.module.scss"
const slides = [
  {
    id: 1,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 2,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 3,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 4,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 5,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 6,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 7,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 8,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 9,
    image: "/images/logo-partner-1.png",
  },
  {
    id: 10,
    image: "/images/logo-partner-1.png",
  },
];
function SliderLogos() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay,]}
      spaceBetween={10}
      slidesPerView={6}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true} 
      className={styles["slider"]}
      >
        {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles["slider-single"]} >
        {({ isActive }) => (
            
                <Image 
                src={slide.image}
                alt="imagen de parner"
                width={100}
                height={100}
                layout="intrinsic"
                className={styles["image"]}
                />
           
        )}

        </SwiperSlide>
        ))}
        </Swiper>
  )
}

export default SliderLogos
