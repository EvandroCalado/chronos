import { BrowserRouter, Route, Routes } from 'react-router';

import { ToastifyContainer } from './components';
import { TaskContextProvider } from './contexts';
import { AboutPomodoroPage, HomePage, NotFoundPage } from './pages';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <TaskContextProvider>
      <ToastifyContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-pomodoro/' element={<AboutPomodoroPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ToastifyContainer>
    </TaskContextProvider>
  );
};

export default App;
