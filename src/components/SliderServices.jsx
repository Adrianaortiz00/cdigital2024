/* import { Swiper, SwiperSlide } from "swiper/react"; */

"use client";

import dynamic from "next/dynamic";

// Importa Swiper de forma correcta
const SwiperComponent = dynamic(() =>
  import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlideComponent = dynamic(() =>
  import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);


import Image from "next/image";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import SubtitleSection from "./SubtitleSection"
import styles from "@/styles/components/sliderServices.module.scss";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
const slidesService=[
    {
        id:1,
        title:"Title 1",
        image: "/images/slide-service-1.png",
    },
    {
        id:2,
        title:"Title 2",
        image: "/images/slide-service-1.png",
    },
    {
        id:3,
        title:"Title 3",
        image: "/images/slide-service-1.png",
    },
    {
        id:4,
        title:"Title 4",
        image: "/images/slide-service-1.png",
    },
    {
        id:5,
        title:"Title 5",
        image: "/images/slide-service-1.png",
    },
]
function SliderServices() {
  return (
    <section className={styles.section}>
        <div className={styles.services}>
        <SubtitleSection
            title="Soluciones Tecnológicas"
            description="This is a description of the section in center alignment. It could have 2 lines per subtitle."
            alignment="center"
            color="white"
        />
        <SwiperComponent
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
            modules={[Navigation, Pagination, Autoplay,]}
            spaceBetween={10}
            slidesPerView={6}
            loop={true} 
            className={styles["slider"]}
        >
            {slidesService.map((slide)=>(
                <SwiperSlide key={slide.id} className={styles["slider-single"]}>
                {({isActive})=>(
                    <div>
                    <Image
                    src={slide.image}
                    alt="imagen de parner"
                    width={100}
                    height={100}
                    layout="intrinsic"
                    className={styles["image"]}
                    />
                    <h3>{slide.title}</h3>
                    </div>
                )}
                </SwiperSlide>
            ))}
            
        </SwiperComponent>
        </div>
    </section>
  )
}

export default SliderServices