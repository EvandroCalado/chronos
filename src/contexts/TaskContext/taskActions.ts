import { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
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
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
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
