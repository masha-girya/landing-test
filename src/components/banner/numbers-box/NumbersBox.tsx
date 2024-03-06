import classNames from 'classnames';
import styles from './numbers-box.module.scss';

interface IProps {
  color: 'orange' | 'blue';
  percentage?: string;
  numbers: string;
  text: string;
}

export const NumbersBox = (props: IProps) => {
  const { color, numbers, text, percentage } = props;

  return (
    <div
      className={classNames(styles.numbersBox, styles[`numbersBox_${color}`])}
    >
      <p
        className={classNames(
          styles.numbersBox__numbers,
          styles[`numbersBox__numbers_${color}`],
        )}
      >
        {numbers}
        {percentage && (
          <span className={styles.numbersBox__numbers__percentage}>
            {percentage}
          </span>
        )}
      </p>
      <p
        className={classNames(
          styles.numbersBox__text,
          styles[`numbersBox__text_${color}`],
        )}
      >
        {text}
      </p>
    </div>
  );
};
