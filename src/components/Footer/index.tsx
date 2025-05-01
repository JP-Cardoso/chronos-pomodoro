import styles from './styles.module.css';
import RouterLink from '../RouterLink';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        Entenda como functiona a técninca pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {year} - Feito com 💚 
      </RouterLink>
    </footer >
  );
}