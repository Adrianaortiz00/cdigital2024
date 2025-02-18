import styles from "../styles/components/subtitleSection.module.scss";

const SubtitleSection = ({
  title,
  description,
  alignment = "center",
  titleColor = "primary-blue",
  descriptionColor = "black",
}) => {
  return (
    <div className={`${styles.subtitleSection} ${styles[alignment]}`}>
      <h2 className={styles[`title-${titleColor}`]}>{title}</h2>
      <img src="/images/separator.svg" alt="Separator" width={60} height={12} />
      <p className={styles[`description-${descriptionColor}`]}>{description}</p>
    </div>
  );
};

export default SubtitleSection;
