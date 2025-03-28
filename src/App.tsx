import { Container, Count, Footer, Logo, Menu } from './components';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Menu />
        <Count />
        <Footer />
      </Container>
    </main>
  );
};

export default App;
