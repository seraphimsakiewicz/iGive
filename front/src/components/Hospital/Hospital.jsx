import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styles from './style.module.css';
function Hospital() {

  const { events } = useSelector(state => state);
  useEffect(() => {

  }, [])

  return (
    <div className="container">
      <div className={styles.event}>
        {
          events?.length === 0 ? null :
            <>
              <div className={styles.eventInfo}>
                <p>Тип крови:</p>
                <p>Кол-во крови:</p>
                <p>Дата публикации:</p>
                <p>Время публикации:</p>
              </div>
              {
                events?.map(el => (
                  <div className={styles.eventBlock}>
                    <p>{el.type}</p>
                    <p>{el.amout}</p>
                    <p>{el.date}</p>
                    <p>{el.time}</p>
                    <button type="button" className="btn btn-success">Опубликовать сбор</button>
                  </div>
                ))
              }
            </>
        }
        <div className={styles.eventLink}>
          <Link to={'/hospital/event'}>
            <button type="button" class="btn btn-primary">Создать event</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hospital
