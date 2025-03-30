import { useEffect, useReducer, useRef } from 'react';

import { loadBeep } from '../../utils';
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
  const payBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((event: MessageEvent) => {
    const countdownSeconds = event.data;

    if (countdownSeconds <= 0) {
      if (payBeepRef.current) {
        payBeepRef.current();
        payBeepRef.current = null;
      }

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
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && !payBeepRef.current) {
      payBeepRef.current = loadBeep();
    } else {
      payBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
