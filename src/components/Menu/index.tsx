import { useEffect, useState } from 'react';
import { SensitiveEnum } from '../../util/enums/sensitve.enum';
import styles from './styles.module.css';

import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon
} from 'lucide-react';
import { getItemLocalStorage, setItemLocalStorage } from '../../util/local-storage';
import RouterLink from '../RouterLink';

type AvailableTheme = 'dark' | 'light';

export default function Menu() {

  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const storageTheme = (getItemLocalStorage({ key: 'data-theme' }) as AvailableTheme) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThmeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {

    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setItemLocalStorage({ key: 'data-theme', value: theme });
  }, [theme])

  return (
    <nav className={styles.menu}>
      <RouterLink
        href="/"
        className={styles.menuLink}
        aria-label={SensitiveEnum.SENSITIVE_HOME}
        title={SensitiveEnum.SENSITIVE_HOME}
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        href="/history/"
        className={styles.menuLink}
        aria-label={SensitiveEnum.SENSITIVE_HISTORY}
        title={SensitiveEnum.SENSITIVE_HISTORY}
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        href="/settings"
        className={styles.menuLink}
        aria-label={SensitiveEnum.SENSITIVE_SETTINGS}
        title={SensitiveEnum.SENSITIVE_SETTINGS}
      >
        <SettingsIcon />
      </RouterLink>

      <RouterLink
        href="#"
        className={styles.menuLink}
        aria-label={SensitiveEnum.SENSITIVE_THEME}
        title={SensitiveEnum.SENSITIVE_THEME}
        onClick={(e) => handleThmeChange(e)}
      >
        {nextThemeIcon[theme] ?? <SunIcon />}
      </RouterLink>
    </nav>
  );
}