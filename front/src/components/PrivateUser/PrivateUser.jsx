import React from 'react'
import styles from './stylePrivateUser.module.css';

function PrivateUser() {
  const people = [
    {
      name: 'Ivan',
      surname: 'Petrov',
      photo: 'https://media.istockphoto.com/photos/latin-young-man-in-a-studio-picture-id494711330?k=20&m=494711330&s=170667a&w=0&h=iLB5EDOtdWpKnNAvU1rGpQ6TMOkLEAQZt4rblMsSQms=',
      tel: 89348761234,
      lastDonation: '12.09.2021',
    }
  ];

  return (
    <div className="container">
      {
        people?.map(el => (
          <div className={styles.privateWrapper}>
            <img className={styles.privateImg} src={el.photo} alt="" />
            <div className={styles.privateText}>
              <h2>{el.name} {el.surname}</h2>
              <h5>Номер телефона: <br /> {el.tel}</h5>
              <h5>Дата последней сдачи крови: <br /> {el.lastDonation}</h5>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PrivateUser
