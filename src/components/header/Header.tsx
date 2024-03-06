/* eslint-disable @typescript-eslint/no-empty-function */
import { Nav } from 'components/nav';
import { Logo } from './logo';
import { Button, PlayIcon } from 'components';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
      <Nav />
      <div className={styles.header__button}>
        <Button
          title="Watch demo"
          handleClick={() => {}}
          color="transparent"
          icon={<PlayIcon />}
        />
      </div>
    </header>
  );
};
