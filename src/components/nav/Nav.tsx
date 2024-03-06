import { NAV } from 'app-constants';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {Object.values(NAV).map((nav) => (
          <li className={styles.nav__list__item}>
            <a href={nav.link} className={styles.nav__list__link}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
