import styles from './styles.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a técnica pomodoro</a>
      <a href='#'>Chronos © {currentYear}</a>
    </footer>
  );
};
