import Image from "next/image";
import styles from "../styles/components/footer.module.scss";
import { LuLinkedin, LuInstagram, LuYoutube } from "react-icons/lu";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/cdigital-per%C3%BA",
    icon: <LuLinkedin />,
    name: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/cdigital.dev?igsh=bGlpc3l6MHdyMXp3",
    icon: <LuInstagram />,
    name: "Instagram",
  },
  {
    href: "https://www.youtube.com/@CDigitalDEV",
    icon: <LuYoutube />,
    name: "YouTube",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/background-footer.svg"
            alt="CDigital-Perú-Logo"
            width={100}
            height={45}
            priority
          />
        </div>

        <div className={styles.socialIcons}>
          {socialLinks.map(({ href, icon, name }) => (
            <a
              key={name}
              href={href}
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${name}`}
            >
              {icon}
            </a>
          ))}
        </div>

        <div className={styles.text}>Poppins | SemiBold 18 | Text h</div>
      </div>
    </footer>
  );
};

export default Footer;
