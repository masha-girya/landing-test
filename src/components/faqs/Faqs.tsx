import { FAQ } from 'app-constants';
import styles from './faqs.module.scss';
import { DetailsBox } from './details-box';
import RainbowImg from 'styles/assets/rainbow.png';
import UnicornImg from 'styles/assets/unicorn.png';

export const FAQs = () => {
  return (
    <article className={styles.faqs}>
      <div className={styles.faqs__titleBox}>
        <h3 className={styles.faqs__titleBox__title}>
          Discover
          <br />
          <span className={styles.faqs__titleBox__title_highlight}> FAQs </span>
          about Owly
        </h3>
        <img
          src={UnicornImg}
          alt="Unicorn"
          className={styles.faqs__titleBox__unicornImg}
          loading="lazy"
        />
        <img
          src={RainbowImg}
          alt="Rainbow"
          className={styles.faqs__titleBox__rainbowImg}
          loading="lazy"
        />
      </div>
      <div className={styles.faqs__detailsBox}>
        {FAQ.map((faq, index) => (
          <DetailsBox
            question={faq.title}
            answer={faq.description}
            index={index + 1}
          />
        ))}
      </div>
    </article>
  );
};
