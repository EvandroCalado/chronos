import { TaskContextProvider } from './contexts';
import { HomePage } from './pages';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <TaskContextProvider>
      <HomePage />
    </TaskContextProvider>
  );
};

export default App;
