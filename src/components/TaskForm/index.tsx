import { PlayCircleIcon } from 'lucide-react';

import { Button } from '../Button';
import { Cycles } from '../cycles';
import { Input } from '../Input';
import { Label } from '../Label';
import styles from './styles.module.css';

export const TaskForm = () => {
  return (
    <form className={styles.taskForm}>
      <div className={styles.taskFormInput}>
        <Label>Tarefa</Label>
        <Input type='text' placeholder='Adicione uma nova tarefa' />
      </div>

      <p>Próximo ciclo é de 25min</p>

      <Cycles />

      <Button>
        <PlayCircleIcon />
      </Button>
    </form>
  );
};
