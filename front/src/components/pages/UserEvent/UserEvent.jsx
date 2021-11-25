import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styleUserEvent.module.css";
import { useDispatch } from "react-redux";
import { getCoordinates } from "../../../redux/ac/geocodeAC";
import { subscribeUser } from "../../../redux/ac/userAC";
import Map from "../../Google/Map";

function UserEvent() {
  const { id } = useParams();
  const { event } = useSelector((state) => state);
  const currEvent = event.find((el) => el.id === +id);
  const dispatch = useDispatch();


  useEffect(() => {
    const address =
      currEvent.Hospital.title +
      " " +
      currEvent.Hospital.street +
      " " +
      currEvent.Hospital.building; 
    dispatch(getCoordinates(address));
  }, [dispatch,currEvent]);
  const coordinates = useSelector((state) => state?.coordinates);
  console.log(currEvent)
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
            <p>
              {currEvent.Hospital?.city}, {currEvent.Hospital?.street},{" "}
              {currEvent.Hospital?.building}
            </p>
            <p>{currEvent.Hospital?.phoneNumber}</p>
            <p>{currEvent.Hospital?.webSite}</p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => dispatch(subscribeUser(id))}
            >
              Подписаться
            </button>
          </div>
          <Map eventData={event} coordinates={coordinates} zoom={12} />
        </div>
      </div>
    </div>
  );
}

export default UserEvent;
