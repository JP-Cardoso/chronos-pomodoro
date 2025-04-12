// PascalCase
// HearderHeading

import './styles/theme.css';
import './styles/global.css';

import HomePage from './pages/Home';
import { TaskStateModel } from './models/task-state-model/TaskStateModel';

const INITIAL_STATE: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakModel: 15
  }
}

export default function App() {

  return (
    <HomePage />
  );
}