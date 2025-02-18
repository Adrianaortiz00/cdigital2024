"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/components/aboutSection.module.scss";
import SubtitleSection from "./SubtitleSection";
import Button from "./Button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <motion.div
        className={styles.textContainer}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <SubtitleSection
          title="Sobre nosotros"
          description="Convertimos desafíos en oportunidades a través de la automatización y la digitalización."
          alignment="left"
          titleColor="primary-blue"
          descriptionColor="black"
        />

        <p className={styles.paragraph}>
          En CDigital, nos apasiona la transformación digital y la
          automatización de procesos. Nos especializamos en diseñar soluciones
          innovadoras que potencian la eficiencia y productividad de las
          empresas a través de la Microsoft Power Platform. Con un enfoque ágil
          y centrado en el usuario, creamos herramientas low-code que
          simplifican la gestión empresarial, optimizan flujos de trabajo y
          mejoran la experiencia digital
        </p>

        <Link href="/acerca" className={styles.btn}>
          <Button variant="green-button">Conoce más</Button>
        </Link>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div className={styles.outerCircle}></div>
        <div className={styles.circle}></div>
        <div className={styles.innerCircle}>
          <Image
            src="/images/aboutSectionImage.png"
            alt="About Section Image"
            width={400}
            height={400}
            className={styles.image}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
