import { ReactNode } from "react";
import styles from './styles.module.css'

type ContainerProps = {
  children: ReactNode
}

export default function Conatiner({
  children
}: ContainerProps) {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}