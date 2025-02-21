/* import { Swiper, SwiperSlide } from "swiper/react"; */

"use client";

/* import dynamic from "next/dynamic";

// Importa Swiper de forma correcta
const SwiperComponent = dynamic(() =>
  import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlideComponent = dynamic(() =>
  import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);
 */

import Image from "next/image";
import { EffectCoverflow, Navigation } from 'swiper/modules';
import SubtitleSection from "./SubtitleSection"
import styles from "@/styles/components/sliderServices.module.scss";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slidesService=[
    {
        id:1,
        title:"Power Apps",
        image: "/images/slide-service-power-apps.svg",
    },
    {
        id:2,
        title:"Power Automate",
        image: "/images/slide-service-power-automate.svg",
    },
    {
        id:3,
        title:"SharePoint",
        image: "/images/slide-service-sharepoint.svg",
    },
    {
        id:4,
        title:"UX/UI",
        image: "/images/slide-service-ux-ui.svg",
    },
    {
        id:5,
        title:"Capacitaciones & Soporte",
        image: "/images/slide-service-capacitaciones-y-soporte.svg",
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
        <Swiper
            effect="coverflow"
            coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 190,
                modifier: 1,
                slideShadows: false
              }}
            modules={[EffectCoverflow, Navigation, Autoplay,]}
            centeredSlides={true}
            //spaceBetween={0}
            slidesPerView={'auto'}
            loop={true} 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }} 
            //pagination={{ clickable: true }}
            navigation={true}
            className={styles["slider"]}
        >
            {slidesService.map((slide)=>(
                <SwiperSlide key={slide.id} className={styles["slider-single"]}>
                
                    <div className="slide">
                    <Image
                    src={slide.image}
                    alt="imagen de parner"
                    width={150}
                    height={150}
                    layout="intrinsic"
                    className={styles["image"]}
                    />
                    <h3 className={styles["title-slide"]}>{slide.title}</h3>
                    </div>
                
                </SwiperSlide>
            ))}
            
        </Swiper>
        </div>
    </section>
  )
}

export default SliderServices