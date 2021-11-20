import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styleDetailUser.module.css';
import { useSelector, useDispatch } from 'react-redux';

function DetailUser() {
  const { events } = useSelector(state => state);
  console.log(events);
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch();
  }, [])
  return (
    <div className={styles.event}>
      <div className="container">
        <h3 className={styles.eventTitle}>Места для сдачи крови</h3>


        {
          events?.length === 0 ? null :
            <>
              <div className={styles.eventInfo}>
                <p className={styles.eventInfoItem}>Название больницы:</p>
                <p className={styles.eventInfoItem}>Тип крови:</p>
                <p className={styles.eventInfoItem}>Кол-во крови в литрах:</p>
                <p className={styles.eventInfoItem}>Дата публикации:</p>
                <p className={styles.eventInfoItem}>Время публикации:</p>
              </div>
              {
                events?.map(el => (
                  <div className={styles.eventBlock}>
                    <p>{el.type}</p>
                    <p>{el.amout}</p>
                    <p>{el.date}</p>
                    <p>{el.date}</p>
                    <p>{el.time}</p>
                    <Link to={`/user/event/${el.id}`}>
                      <button type="button" className="btn btn-success">Стать донором</button>
                    </Link>
                  </div>
                ))
              }
            </>
        }
      </div>
    </div>
  )
}

export default DetailUser
