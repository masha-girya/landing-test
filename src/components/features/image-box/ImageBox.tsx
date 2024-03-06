import classNames from 'classnames';
import styles from './image-box.module.scss';

interface IProps {
  image: string;
  topImage: string;
  isOwl?: boolean;
}

export const ImageBox = (props: IProps) => {
  const { image, topImage, isOwl } = props;

  return (
    <div className={styles.imageBox}>
      <img
        className={styles.imageBox__img}
        src={image}
        alt="Feature Image"
        loading="lazy"
      />
      <img
        className={classNames(styles.imageBox__topImg, {
          [styles.imageBox__topImg_isOwl]: isOwl,
        })}
        src={topImage}
        alt="Feature top Image"
        loading="lazy"
      />
    </div>
  );
};
