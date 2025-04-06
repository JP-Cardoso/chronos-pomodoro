// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import Conatiner from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';
import DefaultInput from './components/DefaultInput';

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
              labelText='label'
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
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Conatiner>
    </>
  );
}