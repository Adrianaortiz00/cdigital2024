"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
// import Swiper and modules styles
import 'swiper/css';
import Image from 'next/image';
import Button from './Button';
import styles from "../styles/components/sliderMain.module.scss";

  
const slides=[
  {
    id:1,
    title:"Título 1",
    text:"Esta es la descripción del primer slide",
    button:"Botón 1",
    image:"/images/ipad-slider-1.png",
  },
  {
    id:2,
    title:"Título 2",
    text:"Esta es la descripción del segundo slide",
    button:"Botón 2",
    image:"/images/ipad-slider-1.png",
  },
  {
    id:3,
    title:"Título 3",
    text:"Esta es la descripción del tercer slide",
    button:"Botón 3",
    image:"/images/ipad-slider-1.png",
  },
  {
    id:4,
    title:"Título 4",
    text:"Esta es la descripción del cuarto slide",
    button:"Botón 4",
    image:"/images/ipad-slider-1.png",
  }



]

function SliderMain() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay,]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      /* autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }} */
      loop={true}
      className={styles["slider-container"]}
    >
       {slides.map((slide, index) => (
      <SwiperSlide key={slide.id}>
        {({ isActive }) => (
        <div className={styles["slide"]}>
        {/* Animación de entrada y salida del contenido */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={styles["slide-content"]}
        >
          <h2 className={styles["title-slide"]}>{slide.title}</h2>
          <h3 className={styles["description-slide"]}>{slide.text}</h3>
          <Button children={slide.button} />
          
        </motion.div>

        {/* imagen y formas rectangulares */}
        <div className={styles["image-container"]}>
          <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={isActive ? { opacity: 1, y: 50 } : { opacity: 0, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay:0.2 }}
          className={styles["rectangle-green"]}
          />

          <motion.div
          initial={{ opacity: 0, y: 20, rotate: 180 }}
          animate={isActive ? { opacity: 1, y: 0, rotate: 180 } : { opacity: 0, y: 20, rotate: 180 }}
          transition={{ duration: 1.0, ease: "easeOut", delay:0.2 }}
          className={styles["rectangle-blue"]}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1} : { opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay:0.8 }}
            className={styles["image"]}
          >
          <Image
            src={slide.image}
            alt={slide.title}
            width={330}
            height={560}
            layout="intrinsic"
            className={styles["image"]}
          />
          </motion.div>
        </div>
      </div>
    )}
  </SwiperSlide>
))}
    </Swiper>
  )
}

export default SliderMain