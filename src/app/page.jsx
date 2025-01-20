import styles from '../styles/page.module.scss';

export default function Page() {
  return (
    <main>
      <h1 className={styles.title}>Título principal</h1>
      <h2 className={styles.subtitle}>Subtítulo de la página</h2>
      <div className={styles.content}>
        <p>
          Este es un texto de ejemplo. 
        </p>
      </div>
    </main>
  );
}
