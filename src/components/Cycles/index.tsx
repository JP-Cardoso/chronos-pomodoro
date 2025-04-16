import classNames from 'classnames';
import styles from './style.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export default function Cycles() {

  const { state } = useTaskContext();

  const setpCycles = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo"
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        {setpCycles.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={classNames(styles.cycleDot, styles[nextCycleType])}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            />
          )
        })}

      </div>
    </div>
  );
}