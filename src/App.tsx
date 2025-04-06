// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import Conatiner from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';

export default function App() {

  return (
    <>
      <Conatiner>
        {/* <Heading>LOGO</Heading> */}
        <Logo />
      </Conatiner>

      <Conatiner>
        <Menu />
      </Conatiner>
    </>
  );
}