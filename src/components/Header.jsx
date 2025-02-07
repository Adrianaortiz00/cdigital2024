import styles from "../styles/components/Header.module.scss";
import NavItem from "./NavItem";

const listMenu = [
  {
    id: 1,
    text: "Nosotros",
    href: "/Acerca",
  },
  {
    id: 2,
    text: "Nuestros clientes",
    href: "/clientes",
  },
  {
    id: 3,
    text: "Soluciones",
    href: "/clientes",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      {listMenu.map((item) => (
        <NavItem
          key={item.id}
          href={item.href}
          text={item.text}
          className={styles.hola}
        />
      ))}

      <div className={styles.logo}>
        <img
          src="/images/cdigital_completo.svg"
          alt="Logo"
          width={60}
          height={11}
        />
      </div>
      <nav href="#contacto" className={styles.contactButton}>
        Contacto
      </nav>
    </header>
  );
};

export default Header;
