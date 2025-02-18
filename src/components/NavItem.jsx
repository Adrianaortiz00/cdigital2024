import Link from "next/link";
import styles from "../styles/components/navItem.module.scss";

const NavItem = ({ href, text }) => {
  return (
    <Link href={href} className={styles.navItem}>
      <span>{text}</span>
      <img src="images/separator.svg" 
      alt="Separator" 
      width={60} 
      height={12} />
    </Link>
  );
};

export default NavItem;
