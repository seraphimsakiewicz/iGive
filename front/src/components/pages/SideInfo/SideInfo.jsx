import React from 'react'
import styles from './styleSideInfo.module.css';

function SideInfo() {
  return (
    <div className={styles.eventRigthBlock}>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/1.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          Coronavirus in Russia and Worldwide: <br /> Timeline of Events
        </p>
      </div>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/2.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          What to do if a family member <br /> gets sick?
        </p>
      </div>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/3.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          Flu - Symptoms and Prevention
        </p>
      </div>
    </div>
  )
}

export default SideInfo
