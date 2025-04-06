// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import Conatiner from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';
import DefaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';
import DefaultButton from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import Footer from './components/Footer';

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

      <Conatiner>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput
              id='meuInput'
              type='text'
              labelText='task'
              placeholder='Digite algo'
              defaultValue='Valor preenchido'
              disabled
            />
          </div>

          <div className="formRow">
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<PlayCircleIcon />}
              color='red'
            />
          </div>
        </form>
      </Conatiner>

      <Conatiner>
        <Footer />
      </Conatiner>
    </>
  );
}