import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='/'>Chronos © {currentYear}</RouterLink>
    </footer>
  );
};
