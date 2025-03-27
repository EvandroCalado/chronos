import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

const links = [
  {
    id: 1,
    icon: HomeIcon,
    href: '#',
  },
  {
    id: 2,
    icon: HistoryIcon,
    href: '#',
  },
  {
    id: 3,
    icon: SettingsIcon,
    href: '#',
  },
  {
    id: 4,
    icon: SunIcon,
    href: '#',
  },
];

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      {links.map(link => (
        <a key={link.id} href={link.href}>
          <link.icon />
        </a>
      ))}
    </nav>
  );
};
