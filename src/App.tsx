import { Count, TaskForm } from './components';
import { MainTemplate } from './templates';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <MainTemplate>
      <Count />
      <TaskForm />
    </MainTemplate>
  );
};

export default App;
