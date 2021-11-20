import React from 'react'
import styles from './stylePrivateUser.module.css';

function PrivateUser() {
  const people = [
    {
      name: 'Ivan',
      surname: 'Petrov',
      photo: 'https://img.freepik.com/free-photo/young-handsome-man-with-beard-over-isolated-keeping-the-arms-crossed-in-frontal-position_1368-132662.jpg?size=626&ext=jpg',
      tel: 89348761234,
      lastDonation: '12.09.2021',
      totalDonation: '100 литров',
    }
  ];

  return (
    <div className={styles.mainPrivateUser}>
      <div className="container">
        {
          people?.map(el => (
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
                      ФИО:
                    </p>
                    <p>{el.name} {el.surname}</p>
                  </div>
                  <div className={styles.userTextBlockList}>
                    <p className={styles.userTextBlockItem}>
                      Телефон:
                    </p>
                    <p>{el.tel}</p>
                  </div>
                  <div className={styles.userTextBlockList}>
                    <p className={styles.userTextBlockItem}>
                      Дата последней сдачи крови:
                    </p>
                    <p>{el.lastDonation}</p>
                  </div>
                  <div className={styles.userTextBlockList}>
                    <p className={styles.userTextBlockItem}>
                      Сколько всего сдано крови:
                    </p>
                    {el.totalDonation}
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

export default PrivateUser
