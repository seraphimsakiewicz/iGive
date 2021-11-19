import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styleFooter.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>

          <div className={styles.information}>
            <h3 className={styles.footerTitle}>Информация</h3>
            <ul className={styles.footerList}>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  Правила обработки данных
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  Доровор-оферта
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.footerTitle}>Контакты</h3>
            <ul className={styles.footerList}>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  freelance-book@ya.ru
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  vk.me/aislam23
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.footerLink} to={'/hospital/event'}>
                  t.me/aislam23
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.policy}>
          <h3 className={styles.footerTitle}>Политика конфиденциальности</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
