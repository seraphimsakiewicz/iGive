import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './styleUserEvent.module.css';
import { useDispatch } from 'react-redux'
import { takeAddressUserAndHospital } from '../../../redux/ac/eventAC';

function UserEvent() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { event } = useSelector(state => state);
  const { user } = useSelector(state => state);
  const currEvent = event.find(el => el.id === +id);
  console.log(currEvent);
  console.log(user);

  return (
    <div className={styles.eventUser}>
      <div className="container">
        <div className={styles.eventUserWrapper}>
          <h3 className={styles.eventTitle}>Места для сдачи крови</h3>
          <div className={styles.eventInfo}>
            <p className={styles.eventInfoItem}>Название:</p>
            <p className={styles.eventInfoItem}>Адрес:</p>
            <p className={styles.eventInfoItem}>Номер телефона:</p>
            <p className={styles.eventInfoItem}>Приоритет:</p>
          </div>
          <div className={styles.eventUserCard}>
            <p>{currEvent.Hospital?.title}</p>
            <p>{currEvent.Hospital?.city}, {currEvent.Hospital?.street}, {currEvent.Hospital?.building}</p>
            <p>{currEvent.Hospital?.phoneNumber}</p>
            <p>{currEvent.Hospital?.webSite}</p>
            <button type="button" onClick={(e) => dispatch(takeAddressUserAndHospital(currEvent.Hospital.city, currEvent.Hospital.street, currEvent.Hospital.building))}  className="btn btn-success">Проложить путь</button>
          </div>
          Описание:
        </div>
      </div>
    </div>
  )
}

export default UserEvent
