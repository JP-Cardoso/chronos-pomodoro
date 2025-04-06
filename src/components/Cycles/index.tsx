import classNames from 'classnames';
import styles from './style.module.css';

export default function Cycles() {

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        <span
          className={classNames(
            styles.cycleDot, 
            styles.workTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.shortBreakTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.workTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.shortBreakTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.workTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.shortBreakTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.workTime
          )}
        />
                <span
          className={classNames(
            styles.cycleDot, 
            styles.longBreakTime
          )}
        />
      </div>
    </div>
  );
}