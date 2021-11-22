import React, { useEffect } from 'react'
import styles from './stylePrivateUser.module.css';
import { useSelector } from "react-redux";


function PrivateUser() {
  const { user } = useSelector(state => state);
  console.log(user);

  useEffect(() => {
    
  }, [])

  return (
    <div className={styles.mainPrivateUser}>
      <div className="container">
        <div className={styles.privateWrapper}>
          <div className={styles.userCard}>
            <img className={styles.privateImg} src="https://lh3.googleusercontent.com/proxy/cjoR8kk6cVicQeGbd4UEfLq77IuXaMssPREmr-A_NTZVM_moaZ7T-DaRXlDZa5K85yAZZfLZ-Obr43w" alt="" />
            <button className={styles.privateImgBtn}>Сменить фото</button>
          </div>
          <div className={styles.userTextWrapper}>
            <h3 className={styles.userTextTitle}>Общая информация</h3>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>
                ФИО:
              </p>
              <p>{user?.name} {user?.lastName}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>
                Email адрес :
              </p>
              <p>{user?.email}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>
                Группа крови:
              </p>
              <p>{user?.bloodTypeId}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>
                Город :
              </p>
              <p>{user?.city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivateUser
