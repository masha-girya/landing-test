import classNames from 'classnames';
import styles from './button.module.scss';

interface IProps {
  title: string;
  color: 'orange' | 'grey' | 'black' | 'transparent';
  handleClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button = (props: IProps) => {
  const { title, color, handleClick, icon, disabled } = props;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(styles.button, styles[`button_${color}`], {
        [styles.button_withIcon]: icon,
      })}
      disabled={disabled}
    >
      {title}

      {icon && <div className={styles.button__icon}>{icon}</div>}
    </button>
  );
};
