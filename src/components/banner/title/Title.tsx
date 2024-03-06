import OLetterImg from 'styles/assets/banner-title.png';
import ToCloudImg from 'styles/assets/to-cloud.png';
import styles from './title.module.scss';

export const Title = () => {
  return (
    <h1 className={styles.title}>
      <span className={styles.title__top}>
        <span className={styles.title__welcome}>Welc</span>
        <img src={OLetterImg} className={styles.title__welcomeImg} />
        <span className={styles.title__welcome}>me</span>
      </span>
      <span className={styles.title__owly}>
        <img src={ToCloudImg} className={styles.title__owly__toCloud} />
        Owly
      </span>
    </h1>
  );
};
