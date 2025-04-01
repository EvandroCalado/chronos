import { useRef } from 'react';

import { SaveIcon } from 'lucide-react';

import { toastifyAdapter } from '../../adapters';
import { TaskActionTypes, useTaskContext } from '../../contexts';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import styles from './styles.module.css';

export const SettingsForm = () => {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  const formErros: string[] = [];

  const handleSaveSettings = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toastifyAdapter.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime || shortBreakTime || longBreakTime)) {
      formErros.push('Insira apenas valores numéricos.');
    }

    if (workTime <= 0 || workTime > 99) {
      formErros.push('O foco deve ter entre 1 e 99 minutos.');
    }

    if (shortBreakTime <= 0 || shortBreakTime > 30) {
      formErros.push('A pausa curta deve ter entre 1 e 30 minutos.');
    }

    if (longBreakTime <= 0 || longBreakTime > 60) {
      formErros.push('A pausa longa deve ter entre 1 e 60 minutos.');
    }

    if (formErros.length > 0) {
      formErros.forEach(error => toastifyAdapter.error(error));
      formErros.length = 0;
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    toastifyAdapter.success('Configurações salvas');
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSaveSettings}>
      <div className={styles.taskFormInput}>
        <Label htmlFor='workTime'>Foco</Label>
        <Input
          id='workTime'
          type='number'
          ref={workTimeInputRef}
          defaultValue={state.config.workTime}
        />
      </div>
      <div className={styles.taskFormInput}>
        <Label htmlFor='shortBreakTime'>Descanso curto</Label>
        <Input
          id='shortBreakTime'
          type='number'
          ref={shortBreakTimeInputRef}
          defaultValue={state.config.shortBreakTime}
        />
      </div>
      <div className={styles.taskFormInput}>
        <Label htmlFor='longBreakTime'>Descanso longo</Label>
        <Input
          id='longBreakTime'
          type='number'
          ref={longBreakTimeInputRef}
          defaultValue={state.config.longBreakTime}
        />
      </div>

      <Button aria-label='Salvar configurações' title='Salvar configurações'>
        <SaveIcon />
      </Button>
    </form>
  );
};
