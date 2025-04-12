import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export default function CountDown() {

  const { state } = useTaskContext();

  return (
    <div className={styles.container}>
      {state.formattedSecondsRemaining}
    </div>
  );
}