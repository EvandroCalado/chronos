import { Container, Logo, Menu } from './components';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </main>
  );
};

export default App;
