import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.css";
import { allEventFronServer } from "../../../redux/ac/eventAC";

function Hospital() {
  const { event } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventFronServer());
  }, [dispatch]);

  return (
    <div className="container">
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
                <Link to={`/hospital/event/${el.id}`}>
                  <button type="button" className="btn btn-success">
                    Начать сбор
                  </button>
                </Link>
              </div>
            ))}
          </>
        )}
        <div className={styles.eventLink}>
          <Link to={"/hospital/event"}>
            <button type="button" className="btn btn-primary">
              Создать event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
