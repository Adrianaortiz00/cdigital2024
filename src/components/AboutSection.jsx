import Image from "next/image";
import styles from "../styles/components/aboutSection.module.scss";
import SubtitleSection from "./SubtitleSection";
import Button from "./Button";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <SubtitleSection
          title="Subtitle Right"
          description="This is a description of the section in center alignment. It could have 2 lines per subtitle."
          alignment="left"
          titleColor="primary-blue"
          descriptionColor="black"
        />

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
          sagittis tortor, quis molestie sem luctus id. Cras varius tempor
          libero id hendrerit. Maecenas pharetra dignissim pellentesque. Nam
          pretium, elit varius ultrices vestibulum, sem diam dictum augue, at
          interdum velit nunc nec tortor. In hac habitasse platea dictumst. Sed
          felis neque, vehicula eget velit ut, fringilla auctor erat. Phasellus
          semper eu nisl vitae semper. Praesent eu nulla sed nibh luctus ornare.
        </p>
        <div className={styles.btn}>
        <Button variant="green-button" >Conoce más</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.outerCircle}></div>
        <div className={styles.circle}></div>
        <div className={styles.innerCircle}>
          <Image
            src="/images/aboutSectionImage.png"
            alt="About Section Image"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
