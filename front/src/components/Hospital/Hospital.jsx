import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css';
import { allEventFronServer } from '../../redux/ac/eventAC';

function Hospital() {

  const { event } = useSelector(state => state);
  const { hospital } = useSelector(state => state);
  console.log(event);
  console.log(hospital);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allEventFronServer());
  }, [])

  return (
    <div className='container'>
      <div className={styles.event}>
        {event?.length === 0 ? null : (
          <>
            <div className={styles.eventInfo}>
              <p>Тип крови:</p>
              <p>Кол-во крови:</p>
              <p>Дата публикации:</p>
              <p>Приоритет:</p>
            </div>
            {event?.map((el) => (
              <div className={styles.eventBlock}>
                <p>{el.bloodTypeId}</p>
                <p>{el.bloodQuantity}</p>
                <p>{el.eventDate}</p>
                <p>{el.priority}</p>
                <button type='button' className='btn btn-success'>
                  Опубликовать сбор
                </button>
              </div>
            ))}
          </>
        )}
        <div className={styles.eventLink}>
          <Link to={'/hospital/event'}>
            <button type="button" className="btn btn-primary">Создать event</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
