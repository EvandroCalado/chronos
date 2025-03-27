import styles from './styles.module.css';

export const Cycles = () => {
  return (
    <div className={styles.cycles}>
      <p>Ciclos:</p>

      <div className={styles.cyclesDots}>
        <span className={styles.workTime} />
        <span className={styles.shortBreakTime} />
        <span className={styles.workTime} />
        <span className={styles.shortBreakTime} />
        <span className={styles.workTime} />
        <span className={styles.shortBreakTime} />
        <span className={styles.longBreakTime} />
      </div>
    </div>
  );
};
