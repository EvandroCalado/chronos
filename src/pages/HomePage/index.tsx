import { useEffect } from 'react';

import { Count, TaskForm } from '../../components';
import { MainTemplate } from '../../templates';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Chronos';
  }, []);

  return (
    <MainTemplate>
      <Count />
      <TaskForm />
    </MainTemplate>
  );
};
