import Link from "next/link";
import styles from "../styles/components/NavItem.module.scss";

const NavItem = ({ href, text }) => {
  return (
    <Link href={href} className={styles.navItem}>
      <span>{text}</span>
      <img src="images/separator.svg" 
      alt="Separator" 
      width={50} 
      height={5} />
    </Link>
  );
};

export default NavItem;
