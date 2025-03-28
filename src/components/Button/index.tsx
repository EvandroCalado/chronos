import { ComponentProps } from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  variant?: 'primary' | 'destructive';
} & ComponentProps<'button'>;

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props} />
  );
};
