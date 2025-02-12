import styles from '../styles/components/button.module.scss'; 

const Button = ({
  onClick,
  children,
  variant = "green-button",
  size = "medium",
  disabled = false,
}) => {
  const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;