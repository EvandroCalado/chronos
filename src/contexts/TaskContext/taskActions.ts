import { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };
