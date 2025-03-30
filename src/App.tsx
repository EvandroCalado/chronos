import { ToastifyContainer } from './components';
import { TaskContextProvider } from './contexts';
import { HomePage } from './pages';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <TaskContextProvider>
      <ToastifyContainer>
        <HomePage />
      </ToastifyContainer>
    </TaskContextProvider>
  );
};

export default App;
