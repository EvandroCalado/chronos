import { useEffect, useState } from 'react';

import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { Link } from 'react-router';

import styles from './styles.module.css';

const links = [
  {
    id: 1,
    name: 'Home',
    icon: HomeIcon,
    href: '/',
  },
  {
    id: 2,
    name: 'Histórico',
    icon: HistoryIcon,
    href: '#',
  },
  {
    id: 3,
    name: 'Configurações',
    icon: SettingsIcon,
    href: '#',
  },
];

type AvailableThemes = 'light' | 'dark';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const theme = localStorage.getItem('theme') as AvailableThemes;
    return theme ?? 'dark';
  });

  const nextTheme = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      {links.map(link => (
        <Link
          key={link.id}
          to={link.href}
          aria-label={link.name}
          title={link.name}
        >
          <link.icon />
        </Link>
      ))}

      <button aria-label='Tema' title='Tema' onClick={handleTheme}>
        {nextTheme[theme]}
      </button>
    </nav>
  );
};
