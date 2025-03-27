import { ComponentProps } from 'react';

import styles from './styles.module.css';

type LabelProps = ComponentProps<'label'>;

export const Label = ({ ...props }: LabelProps) => {
  return <label {...props} className={styles.label} />;
};
