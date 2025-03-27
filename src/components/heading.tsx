import { ComponentProps } from 'react';

import styles from './heading.module.css';

type HeadingProps = ComponentProps<'h1'>;

export const Heading = ({ children, ...props }: HeadingProps) => (
  <h1 className={styles.heading} {...props}>
    {children}
  </h1>
);
