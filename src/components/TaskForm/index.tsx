import { useRef } from 'react';

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskModel } from '../../models/TaskModel';
import {
  formatSecondsToMinutes,
  getNextCycle,
  getNextCycleType,
} from '../../utils';
import { Button } from '../Button';
import { Cycles } from '../cycles';
import { Input } from '../Input';
import { Label } from '../Label';

import styles from './styles.module.css';

export const TaskForm = () => {
  const { state, setState } = useTaskContext();
  const taskName = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (taskName.current === null) return;

    const taskNameValue = taskName.current.value.trim();

    if (!taskNameValue) return;

    const newTask: TaskModel = {
      id: String(Date.now()),
      name: taskNameValue,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  };

  const handleStopTask = () => {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (task.id === prevState.activeTask?.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
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

      <p>Próximo ciclo é de 25min</p>

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
