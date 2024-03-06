import { Team } from './team';
import { Title } from './title';
import { NumbersBox } from './numbers-box';
import styles from './banner.module.scss';
import OwlImg from 'styles/assets/banner-owl.png';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__title}>
        <Title />
      </div>
      <div className={styles.banner__main}>
        <div className={styles.banner__main__team}>
          <Team />
        </div>
        <div className={styles.banner__main__owlBox}>
          <img className={styles.banner__main__owl} alt="Owl" src={OwlImg} />
        </div>
        <div className={styles.banner__main__cards}>
          <NumbersBox
            color="blue"
            numbers="95"
            percentage="%"
            text="found value in customizable learning paths"
          />
          <NumbersBox
            color="orange"
            numbers="1M"
            text="elevate interactions with ChatGPT"
          />
        </div>
      </div>
    </div>
  );
};
