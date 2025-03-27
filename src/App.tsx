import { TimerIcon } from 'lucide-react';

import { Heading } from './components/heading';

import './styles/globals.css';
import './styles/theme.css';

const App = () => {
  return (
    <main>
      <Heading>
        Test{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </main>
  );
};

export default App;
