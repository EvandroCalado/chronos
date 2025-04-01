import { useEffect, useState } from 'react';

import { ArrowDownUp, TrashIcon } from 'lucide-react';

import { toastifyAdapter } from '../../adapters';
import { Button, Heading } from '../../components';
import { TaskActionTypes, useTaskContext } from '../../contexts';
import { MainTemplate } from '../../templates';
import {
  formatDate,
  getTaskStatus,
  sortTasks,
  SortTasksOptions,
} from '../../utils';

import styles from './styles.module.css';

export const HistoryPage = () => {
  const { state, dispatch } = useTaskContext();
  const [confirmCleanHistory, setConfirmCleanHistory] = useState(false);
  const [sortTasksOption, setSortTasksOption] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  const hasTasks = sortTasksOption.tasks.length > 0;

  const handleSortTasks = ({ field }: Pick<SortTasksOptions, 'field'>) => {
    const newDirection = sortTasksOption.direction === 'desc' ? 'asc' : 'desc';

    setSortTasksOption({
      tasks: sortTasks({
        tasks: sortTasksOption.tasks,
        direction: newDirection,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  const handleClearHistory = () => {
    toastifyAdapter.dismiss();

    toastifyAdapter.confirm('Deseja limpar o histórico?', confirmation => {
      setConfirmCleanHistory(confirmation);
    });
  };

  const taskTypeDictionary = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  useEffect(() => {
    setSortTasksOption(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmCleanHistory) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
    setConfirmCleanHistory(false);
  }, [confirmCleanHistory, dispatch]);

  useEffect(() => {
    document.title = 'Histórico - Chronos';

    return () => {
      toastifyAdapter.dismiss();
    };
  }, []);

  return (
    <MainTemplate>
      <div className={styles.history}>
        <Heading>
          <span>Histórico</span>
          {hasTasks && (
            <Button
              variant='destructive'
              aria-label='Limpar histórico'
              title='Limpar histórico'
              onClick={handleClearHistory}
            >
              <TrashIcon />
            </Button>
          )}
        </Heading>

        {hasTasks && (
          <div className={styles.historyTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.sort}
                    onClick={() => handleSortTasks({ field: 'name' })}
                  >
                    Tarefa <ArrowDownUp />
                  </th>
                  <th
                    className={styles.sort}
                    onClick={() => handleSortTasks({ field: 'duration' })}
                  >
                    Duração <ArrowDownUp />
                  </th>
                  <th
                    className={styles.sort}
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                  >
                    Data <ArrowDownUp />
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOption.tasks.map(task => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}Min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <div className={styles.noTasks}>
            <p>Voce ainda nao possui tarefas registradas</p>
          </div>
        )}
      </div>
    </MainTemplate>
  );
};
