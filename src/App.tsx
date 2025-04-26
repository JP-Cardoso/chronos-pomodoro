import './styles/theme.css';
import './styles/global.css';

import HomePage from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import MessagesContainer from './components/MessagesContainer';

export default function App() {

  return (
    <TaskContextProvider>
      <MessagesContainer>
        <HomePage />
      </MessagesContainer>
    </TaskContextProvider>
  );
}