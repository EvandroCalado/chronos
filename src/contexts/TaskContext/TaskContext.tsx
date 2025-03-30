import { createContext } from 'react';

import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.ActionDispatch<[action: TaskActionModel]>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  dispatch: () => {},
});
