// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import Conatiner from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';

export default function App() {

  return (
    <>
      <Conatiner>
        <Logo />
      </Conatiner>

      <Conatiner>
        <Menu />
      </Conatiner>

      <Conatiner>
        <CountDown />
      </Conatiner>
    </>
  );
}