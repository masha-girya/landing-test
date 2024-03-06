import { FooterNav } from './footer-nav';
import { FOOTER_NAV, SOCIALS } from 'app-constants';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__rightCol}>
        <ul className={styles.footer__rightCol__socialsList}>
          {SOCIALS.map((social) => (
            <li>
              <a
                href={social.link}
                title={social.title}
                target="_blank"
                className={styles.footer__rightCol__socialsList__social}
              >
                {<social.icon />}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.footer__rightCol__rightsText}>
          All Rights Reserved © 2024 Owly Inc.
        </p>
      </div>
      <nav className={styles.footer__leftCol}>
        {FOOTER_NAV.map((navItem) => (
          <FooterNav nav={navItem} />
        ))}
      </nav>
    </footer>
  );
};
