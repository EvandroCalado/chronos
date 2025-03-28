import { ComponentProps } from 'react';

import styles from './styles.module.css';

type ContainerProps = ComponentProps<'section'>;

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <main className={styles.container} {...props}>
      {children}
    </main>
  );
};
