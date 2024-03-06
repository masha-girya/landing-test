
import { ProsCard } from 'components/pros-card/ProsCard';
import { TColor } from 'types';
import { ABOUT_CARDS, ROUTES } from 'app-constants';
import styles from './about.module.scss';

export const About = () => {
  return (
    <article className={styles.about} id={ROUTES.about.link.replace('#', '')}>
      <h3 className={styles.about__title}>
        <span>Dive into the </span>
        <span className={styles.about__title_blue}>World of Owly</span>
      </h3>
      <div className={styles.about__prosCards}>
        {ABOUT_CARDS.map((card) => (
          <ProsCard
            title={card.title}
            text={card.text}
            icon={<card.icon />}
            color={card.color as TColor}
          />
        ))}
      </div>
    </article>
  );
};
