import styles from "../styles/page.module.scss";

export const metadata = {
  title: "Inicio | CDigital | Soluciones en Power Platform",
  description:
    "Bienvenido a CDigital, donde ayudamos a las empresas a optimizar sus procesos con Microsoft Power Platform.",
};

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Space Grotesk | Bold 60 | Title h1</h1>
      <h2 className={styles.subtitle}>
        Space Grotesk | Medium 48 | Subtitle h2
      </h2>
      <h3 className={styles.description}>
        Poppins | Regular 30 | Descriptions h3
      </h3>
      <p className={styles.textP}>Poppins | Regular 18 | Text p</p>
      <h4 className={styles.textH}>Poppins | SemiBold 18 | Text h</h4>
    </div>
  );
}
