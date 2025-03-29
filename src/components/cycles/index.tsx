import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle, getNextCycleType } from '../../utils';

import styles from './styles.module.css';

export const Cycles = () => {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <p>Ciclos:</p>

      {state.currentCycle > 0 ? (
        <div className={styles.cyclesDots}>
          {cycleSteps.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const nextCycleType = getNextCycleType(nextCycle);

            return (
              <span
                key={`${nextCycle}-${nextCycleType}`}
                className={styles[nextCycleType]}
                aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
                title={cycleDescription[nextCycleType]}
              />
            );
          })}
        </div>
      ) : (
        <p className={styles.noCycle}>Nenhum ciclo iniciado</p>
      )}
    </div>
  );
};
