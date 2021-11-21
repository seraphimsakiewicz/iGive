import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styleDetailUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { allEventUserFromServer } from '../../redux/ac/eventAC';

function DetailUser() {
  const { event } = useSelector(state => state);
  console.log(event);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allEventUserFromServer());
  }, [])
  return (
    <div className={styles.event}>
      <div className="container">
        {
          event?.length === 0 ? null :
            <>
              <h3 className={styles.eventTitle}>Места для сдачи крови</h3>
              <div className={styles.eventInfo}>
                <p className={styles.eventInfoItem}>Название больницы:</p>
                <p className={styles.eventInfoItem}>Тип крови:</p>
                <p className={styles.eventInfoItem}>Кол-во крови в литрах:</p>
                <p className={styles.eventInfoItem}>Дата публикации:</p>
                <p className={styles.eventInfoItem}>Приоритет:</p>
              </div>
              {
                event?.map(el => (
                  <div className={styles.eventBlock}>
                    <p>{el.Hospital.headOfDep}</p>
                    <p>{el.bloodTypeId}</p>
                    <p>{el.bloodQuantity}</p>
                    <p>{el.eventDate}</p>
                    <p>{el.priority}</p>
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
