import { useEffect, useReducer } from 'react';

import { TimerWorkerManager } from '../../workers';
import { initialTaskState } from './initialTaskState';
import { TaskActionTypes } from './taskActions';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((event: MessageEvent) => {
    const countdownSeconds = event.data;

    if (countdownSeconds <= 0) {
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countdownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Nenhuma tarefa ativa');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
