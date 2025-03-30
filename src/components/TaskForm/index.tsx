import { useRef } from 'react';

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { toastifyAdapter } from '../../adapters';
import { TaskActionTypes } from '../../contexts';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskModel } from '../../models/TaskModel';
import { getNextCycle, getNextCycleType } from '../../utils';
import { Button } from '../Button';
import { Cycles } from '../cycles';
import { Input } from '../Input';
import { Label } from '../Label';
import { Tips } from '../Tips';

import styles from './styles.module.css';

export const TaskForm = () => {
  const { state, dispatch } = useTaskContext();
  const taskName = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    toastifyAdapter.dismiss();

    if (taskName.current === null) return;

    const taskNameValue = taskName.current.value.trim();

    if (!taskNameValue) {
      toastifyAdapter.warning('Por favor, insira uma tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: String(Date.now()),
      name: taskNameValue,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    toastifyAdapter.success('Tarefa iniciada');
  };

  const handleStopTask = () => {
    toastifyAdapter.dismiss();

    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });

    toastifyAdapter.error('Tarefa interrompida');
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <div className={styles.taskFormInput}>
        <Label>Tarefa</Label>
        <Input
          type='text'
          placeholder='Adicione uma nova tarefa'
          ref={taskName}
          disabled={!!state.activeTask}
        />
      </div>

      <Tips />

      <Cycles />

      {state.activeTask && (
        <Button
          key='stop'
          type='button'
          variant='destructive'
          aria-label='Finalizar tarefa em andamento'
          title='Finalizar tarefa em andamento'
          onClick={handleStopTask}
        >
          <StopCircleIcon />
        </Button>
      )}

      {!state.activeTask && (
        <Button
          key='start'
          type='submit'
          aria-label='Iniciar nova tarefa'
          title='Iniciar nova tarefa'
        >
          <PlayCircleIcon />
        </Button>
      )}
    </form>
  );
};
