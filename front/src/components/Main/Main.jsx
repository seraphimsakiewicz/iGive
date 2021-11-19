import React from 'react'
import styles from './style.module.css';
import { Link } from 'react-router-dom'

function Main() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <p className={styles.mainTitle}>Welcome to iGive!!!</p>
          <div className={styles.mainButtons}>
            <Link aria-current="page" to={`/login/user`}>
              <div className={styles.userBlock}>
                <p className={styles.userTitle}>
                  Стать донором
                </p>
              </div>
            </Link>
            <Link aria-current="page" to={`/login/hospital`}>
              <div className={styles.hospitalBlock}>
                <p className={styles.hospitalTitle}>
                  Я больница
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;
