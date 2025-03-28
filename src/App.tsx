import { Count, TaskForm } from './components';
import { Main } from './templates';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <Main>
      <Count />
      <TaskForm />
    </Main>
  );
};

export default App;
