import React, { useEffect } from 'react'
import styles from './stylePrivateHospital.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { oneHospitalFromServer } from '../../redux/ac/hospitalAC';

function PrivateHospital() {
  const { hospital } = useSelector(state => state);
  console.log(hospital);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(oneHospitalFromServer());
  }, [])

  return (
    <div className={styles.mainPrivateUser}>
    <div className="container">
      {/* { */}
        {/* hospital?.map(el => ( */}
          <>
            <div className={styles.privateWrapper}>
              <div className={styles.userCard}>
              <img className={styles.privateImg} src="https://lh3.googleusercontent.com/proxy/KJtQthlUFkcwxiXYvE-RM9LbrK9Mn1byHnMX0iYbslIcAhY3GLWTGtuIR_tfogLIAiIzYPwJ7YM8TKHP7RRQjtllAp97U_wDFUyqa5Ib0QRwtNdiKq02s_nsCZuemntXxWM8qe0" alt="" />
                <button className={styles.privateImgBtn}>Сменить фото</button>
              </div>
              <div className={styles.userTextWrapper}>
                <h3 className={styles.userTextTitle}>Общая информация</h3>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Руководитель :
                  </p>
                  <p>{hospital.headOfDep}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Телефон :
                  </p>
                  <p>{hospital.phoneNumber}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Адрес :
                  </p>
                  <p>{hospital.city} {hospital.street} {hospital.building}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Веб сайт :
                  </p>
                  {hospital.webSite}
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Описание :
                  </p>
                  {hospital.about}
                </div>
              </div>
            </div>
          </>
        {/* )) */}
      {/* } */}
    </div>
  </div>
  )
}

export default PrivateHospital
