// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import Heading from './components/Heading/Heading';
import { TimerIcon } from 'lucide-react'

export default function App() {

  return (
    <Heading>
      Olá mundo
      <button>
        <TimerIcon />
      </button>
    </Heading>
  );
}