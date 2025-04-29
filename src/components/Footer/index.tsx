import { Link } from 'react-router';
import styles from './styles.module.css';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro/">Entenda como functiona a técninca pomodoro</Link>
      <Link to="/">Chronos Pomodoro &copy; {year} - Feito com 💚 </Link>
    </footer>
  );
}