import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export const Count = () => {
  const { state } = useTaskContext();

  return <div className={styles.count}>{state.formattedSecondsRemaining}</div>;
};
