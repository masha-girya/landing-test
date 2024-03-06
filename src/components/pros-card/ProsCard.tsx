import classNames from 'classnames';
import { TColor } from 'types';
import styles from './pros-card.module.scss';

interface IProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  color: TColor;
}

export const ProsCard = (props: IProps) => {
  const { text, title, icon, color } = props;

  return (
    <div className={classNames(styles.prosCard, styles[`prosCard_${color}`])}>
      <div className={styles.prosCard__icon}>{icon}</div>
      <h5 className={styles.prosCard__title}>{title}</h5>
      <p className={styles.prosCard__text}>{text}</p>
    </div>
  );
};
