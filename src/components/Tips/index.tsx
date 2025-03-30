import { useTaskContext } from '../../contexts';
import { getNextCycle, getNextCycleType } from '../../utils';

export const Tips = () => {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForActiveTask = {
    workTime: (
      <p>
        Foque por <strong>{state.config.workTime}min</strong>.
      </p>
    ),
    shortBreakTime: (
      <p>
        Pausa de <strong>{state.config.shortBreakTime}min</strong> para quele
        cafezinho.
      </p>
    ),
    longBreakTime: (
      <p>
        Aquele merecido descanso de{' '}
        <strong>{state.config.longBreakTime}min</strong>.
      </p>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <p>
        Próximo ciclo será de: <strong>{state.config.workTime}min</strong>.
      </p>
    ),
    shortBreakTime: (
      <p>
        Próximo descanso será de:{' '}
        <strong>{state.config.shortBreakTime}min</strong>.
      </p>
    ),
    longBreakTime: (
      <p>
        Próximo descanso é de <strong>{state.config.longBreakTime}min</strong>.
      </p>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};
