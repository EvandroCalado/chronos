import { TrashIcon } from 'lucide-react';

import { Button, Heading } from '../../components';
import { MainTemplate } from '../../templates';

import styles from './styles.module.css';

export const HistoryPage = () => {
  return (
    <MainTemplate>
      <div className={styles.history}>
        <Heading>
          <span>Histórico</span>
          <span>
            <Button
              variant='destructive'
              aria-label='Limpar histórico'
              title='Limpar histórico'
            >
              <TrashIcon />
            </Button>
          </span>
        </Heading>

        <div className={styles.historyTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index}>
                  <td>Estudar</td>
                  <td>25min</td>
                  <td>20/04/2025 08:00</td>
                  <td>Completa</td>
                  <td>Foco</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainTemplate>
  );
};
