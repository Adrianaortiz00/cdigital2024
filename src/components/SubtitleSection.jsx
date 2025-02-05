import styles from  "../styles/SubtitleSection.module.scss";

const SubtitleSection = ({ title, description, alignment, color = "primary-blue" }) => {
  return (
    <div  className={`${styles.subtitleSection} ${styles[alignment]} ${styles[color]} `} >
      <h2>{title}</h2>
      <img src="/separator.svg" alt="Separator" width={60} height={12} />
      <p >{description}</p>
    </div>
  );
};


export default SubtitleSection;
