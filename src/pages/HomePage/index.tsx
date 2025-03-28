import { Count, TaskForm } from '../../components';
import { MainTemplate } from '../../templates';

export const HomePage = () => {
  return (
    <MainTemplate>
      <Count />
      <TaskForm />
    </MainTemplate>
  );
};
