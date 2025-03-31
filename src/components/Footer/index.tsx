import { Link } from 'react-router';

import styles from './styles.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>Entenda como funciona a técnica pomodoro</Link>
      <Link to='/'>Chronos © {currentYear}</Link>
    </footer>
  );
};
