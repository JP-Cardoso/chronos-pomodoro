import styles from './styles.module.css';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="#">Entenda como functiona a técninca pomodoro</a>
      <a href="#">Chronos Pomodoro &copy; {year} - Feito com 💚 </a>
    </footer>
  );
}