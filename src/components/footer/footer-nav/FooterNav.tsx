import { FOOTER_NAV } from 'app-constants';
import styles from './footer-nav.module.scss';

interface IProps {
  nav: (typeof FOOTER_NAV)[0];
}

export const FooterNav = ({ nav }: IProps) => {
  return (
    <ul className={styles.footerNav}>
      {nav.map((navItem) => (
        <li>
          <a
            href={navItem.link}
            title={navItem.title}
            target="_blank"
            className={styles.footerNav__link}
          >
            {navItem.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
