import { DownArrowIcon } from 'components';
import styles from './details-bos.module.scss';

interface IProps {
  question: string;
  answer: string;
  index: number;
}

export const DetailsBox = (props: IProps) => {
  const { question, answer, index } = props;

  return (
    <details className={styles.details}>
      <summary className={styles.details__questionBox}>
        <div className={styles.details__questionBox__text}>
          <div className={styles.details__number}>{`0${index}`}</div>
          <p className={styles.details__question}>{question}</p>
        </div>

        <DownArrowIcon className={styles.details__arrow} />
      </summary>
      <p className={styles.details__answer}>{answer}</p>
    </details>
  );
};
