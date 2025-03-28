import { Container, Count, Footer, Logo, Menu, TaskForm } from './components';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Menu />
        <Count />
        <TaskForm />
        <Footer />
      </Container>
    </main>
  );
};

export default App;
