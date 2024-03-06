import styles from './app-container.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: IProps) => {
  return <div className={styles.appContainer}>{children}</div>;
};
