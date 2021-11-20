import React from 'react'
import styles from './styleFooter.module.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className="footer-one">
            <Link to={'/'}>
              <p className={styles.footerLogo} > iGive</p>
            </Link>
            <ul className={styles.footerList}>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Download Now</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>License</p>
              </li>
            </ul>
            <ul className={styles.footerList}>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>About</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Features</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Pricing</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Careers</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Help</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Privacy Policy</p>
              </li>
            </ul>
            <p className={styles.authorRight}>
              © 2021 iGive UI Kit. All rights reserved
            </p>
          </div>
          <div className={styles.footerTwo}>
            <span className={styles.footerSpan}>
              Get the App
            </span>
            <img className={styles.footerIcon}  src="http://localhost:3000/google-play.svg" alt="icon: App Store" />
            <img className={styles.footerIcon} src="http://localhost:3000/app-store.svg" alt="icon: Google-play" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
