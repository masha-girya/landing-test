import { ROUTES } from 'app-constants';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <a href={ROUTES.home.link} className={styles.logo}>
      {ROUTES.home.title}
    </a>
  );
};
