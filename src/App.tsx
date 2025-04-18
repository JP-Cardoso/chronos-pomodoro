import './styles/theme.css';
import './styles/global.css';

import HomePage from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export default function App() {

  return (
    <TaskContextProvider>
      <HomePage />
    </TaskContextProvider>
  );
}