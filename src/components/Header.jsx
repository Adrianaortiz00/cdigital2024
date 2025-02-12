import styles from "../styles/components/Header.module.scss";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavItem href="/acerca" text="Nosotros" className={styles.nosotros}/>
      <NavItem href="/clientes" text="Nuestros clientes" className={styles.clientes} />
      <div className={styles.logo}>
        <img
          src="/images/cdigital_completo.svg"
          alt="Logo"
          width={250}
          height={83}
        />
      </div>
      <NavItem href="/acerca" text="Soluciones" className={styles.soluciones}/>
      <nav href="/contacto" className={styles.contactButton}>
        Contacto
      </nav>
    </header>
  );
};

export default Header;
