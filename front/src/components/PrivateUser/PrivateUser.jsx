import React from 'react'
import styles from './stylePrivateUser.module.css';
import { useSelector } from "react-redux";


function PrivateUser() {
  const { user } = useSelector(state => state);
  console.log(user);

  return (
    <div className={styles.mainPrivateUser}>
      <div className="container">
        <div className={styles.privateWrapper}>
          <div className={styles.userCard}>
            <img className={styles.privateImg} src="https://lh3.googleusercontent.com/proxy/KJtQthlUFkcwxiXYvE-RM9LbrK9Mn1byHnMX0iYbslIcAhY3GLWTGtuIR_tfogLIAiIzYPwJ7YM8TKHP7RRQjtllAp97U_wDFUyqa5Ib0QRwtNdiKq02s_nsCZuemntXxWM8qe0" alt="" />
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
