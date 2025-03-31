import { ToastifyContainer } from './components';
import { TaskContextProvider } from './contexts';
import { Router } from './routers';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <TaskContextProvider>
      <ToastifyContainer>
        <Router />
      </ToastifyContainer>
    </TaskContextProvider>
  );
};

export default App;
