import React from 'react'
import styles from './stylePrivateHospital.module.css';

function PrivateHospital() {
  const hospital = [
    {
      email: 'hamzat@mail.ru',
      photo: 'https://www.gannett-cdn.com/presto/2021/09/13/NCOD/aacc9c8a-e5b2-454d-b96a-71ae89181d38-PMH_Rendering_1.jpg?crop=1121,841,x252,y0&quality=50&width=640',
      inn: 435397459387539857938457,
      headOfDep: 'Галина Петровна',
      phoneNumber: '8929 - 234 - 54 - 67',
      city: 'Москва',
      street: 'Мира',
      building: '4b',
      webSite: 'hospitalwebsite.com',
      title: 'title',
      about: 'Больница нормальная',
    },
  ];
  return (
    <div className={styles.mainPrivateUser}>
    <div className="container">
      {
        hospital?.map(el => (
          <>
            <div className={styles.privateWrapper}>
              <div className={styles.userCard}>
                <img className={styles.privateImg} src={el.photo} alt="" />
                <button className={styles.privateImgBtn}>Сменить фото</button>
              </div>
              <div className={styles.userTextWrapper}>
                <h3 className={styles.userTextTitle}>Общая информация</h3>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Руководитель :
                  </p>
                  <p>{el.headOfDep}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Телефон :
                  </p>
                  <p>{el.phoneNumber}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Адрес :
                  </p>
                  <p>{el.city} {el.street} {el.building}</p>
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Веб сайт :
                  </p>
                  {el.webSite}
                </div>
                <div className={styles.userTextBlockList}>
                  <p className={styles.userTextBlockItem}>
                    Описание :
                  </p>
                  {el.about}
                </div>
              </div>
            </div>
          </>
        ))
      }
    </div>
  </div>
  )
}

export default PrivateHospital
