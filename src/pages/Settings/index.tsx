import { Heading, SettingsForm } from '../../components';
import { MainTemplate } from '../../templates';

import styles from './styles.module.css';

export const SettingsPage = () => {
  return (
    <MainTemplate>
      <div className={styles.settings}>
        <Heading>Ajustar configurações</Heading>

        <p>
          Modifique as configurações para tempo de foco, descanso curso e
          descanso longo.
        </p>

        <SettingsForm />
      </div>
    </MainTemplate>
  );
};
