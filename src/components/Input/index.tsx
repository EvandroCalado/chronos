import { ComponentProps } from 'react';

import styles from './styles.module.css';

type InputProps = ComponentProps<'input'>;

export const Input = ({ ...props }: InputProps) => {
  return <input className={styles.input} {...props} />;
};
