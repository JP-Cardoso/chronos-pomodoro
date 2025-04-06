// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';
import Conatiner from './components/Container';
import Heading from './components/Heading';

export default function App() {

  return (
    <>
      <Conatiner>
        <Heading>LOGO</Heading>
      </Conatiner>

      <Conatiner>
        <Heading>Menu</Heading>
      </Conatiner>
    </>
  );
}