import styles from "@/styles/components/header.module.scss";
import Button from "@/components/Button";
import Image from "next/image";

import NavItem from "./NavItem";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavItem href="/acerca" text="Nosotros" className={styles.nosotros} />
      <NavItem
        href="/clientes"
        text="Nuestros clientes"
        className={styles.clientes}
      />
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/cdigital-completo.svg"
          alt="Logo"
          width={230}
          height={75}
          priority
        />
      </Link>
      <NavItem href="/servicios" text="Soluciones" className={styles.soluciones} />
      <Link href="/contacto" passHref>
        <Button variant="blue-button">Contacto</Button>
      </Link>
    </header>
  );
};

export default Header;
