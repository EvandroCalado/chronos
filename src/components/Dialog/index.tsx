import { ToastContentProps } from 'react-toastify';

import { Button } from '../Button';

import styles from './styles.module.css';

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <div className={styles.dialog}>
      <p>{data}</p>

      <div className={styles.dialogButtons}>
        <Button
          onClick={() => closeToast(true)}
          aria-label='Confirmar exclusão e fechar'
          title='Confirmar exclusão e fechar'
        >
          Confirmar
        </Button>
        <Button
          variant='destructive'
          onClick={() => closeToast(false)}
          aria-label='Cancelar exclusão e fechar'
          title='Cancelar exclusão e fechar'
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};
