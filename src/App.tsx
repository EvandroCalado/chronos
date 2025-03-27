import { Container, Count, Logo, Menu } from './components';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Menu />
        <Count />
      </Container>
    </main>
  );
};

export default App;
