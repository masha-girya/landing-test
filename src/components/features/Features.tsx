/* eslint-disable @typescript-eslint/no-empty-function */
import classNames from 'classnames';
import { ImageBox } from './image-box';
import { Button } from 'components';
import { Form } from './form';
import { ROUTES } from 'app-constants';
import SchemaImg from 'styles/assets/schema.png';
import OwlTopImg from 'styles/assets/owl-chat-top.png';
import SchemaTopImg from 'styles/assets/schema-top.png';
import OwlImg from 'styles/assets/owl-chat.png';
import styles from './features.module.scss';

export const Features = () => {
  return (
    <section
      className={styles.features}
      id={ROUTES.about.link.replace('#', '')}
    >
      <article className={classNames(styles.features__article, styles.article)}>
        <div className={styles.article__textBox}>
          <h3 className={styles.article__textBox__title}>
            Secure Chat with{' '}
            <span className={styles.article__textBox__title_highlight}>
              ChatGPT
            </span>
          </h3>
          <p className={styles.article__textBox__text}>
            Owly's core, ChatGPT, ensures secure, topic-focused conversations,
            fostering a safe educational environment for your child's curiosity
          </p>
          <div className={styles.article__textBox__button}>
            <Button color="black" handleClick={() => {}} title="Buy now" />
          </div>
        </div>
        <ImageBox topImage={SchemaTopImg} image={SchemaImg} />
      </article>

      <article className={classNames(styles.features__article, styles.article)}>
        <ImageBox topImage={OwlTopImg} image={OwlImg} isOwl />
        <div className={styles.article__textBox}>
          <h3 className={styles.article__textBox__title}>
            Bright
            <span className={styles.article__textBox__title_highlightBlue}>
              {' '}
              Learning{' '}
            </span>
            Experience
          </h3>
          <p className={styles.article__textBox__text}>
            Owly's core, ChatGPT, ensures secure, topic-focused conversations,
            fostering a safe educational environment for your child's curiosity
          </p>
          <Form />
        </div>
      </article>
    </section>
  );
};
