/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from 'components/button';
import TeamImg from 'styles/assets/team.png';
import styles from './team.module.scss';

export const Team = () => {
  return (
    <div className={styles.team}>
      <div className={styles.team__indent}>
        <div className={styles.team__members}>
          <img
            src={TeamImg}
            alt={`team members`}
            className={styles.team__members}
          />
        </div>

        <p className={styles.team__text}>
          Devoted team crafts exceptional educational toy
        </p>
      </div>
      <div className={styles.team__indent}>
        <Button title={'Buy now'} color={'orange'} handleClick={() => {}} />
        <Button title={'Join waitlist'} color={'grey'} handleClick={() => {}} />
      </div>
    </div>
  );
};
