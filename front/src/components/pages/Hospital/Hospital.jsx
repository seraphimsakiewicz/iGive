import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allEventHospitalFromServer } from "../../../redux/ac/eventAC";
import { allhospitalMyDonorFromServer } from "../../../redux/ac/hospitalMyDonorAC";
import styles from "./style.module.css";
import "react-tabs/style/react-tabs.css";

function Hospital() {
  const { event } = useSelector((state) => state);
  const { hospitalMyDonor } = useSelector((state) => state);
  const archivedEvents = event.filter((el) => el.active === false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventHospitalFromServer());
  }, [dispatch]);

  const activeEventsLength = event?.filter(
    (event) => event.active === true
  ).length;

  useEffect(() => {
    dispatch(allhospitalMyDonorFromServer());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={styles.event}>
        {activeEventsLength?.length >= 1 ? (
          <div className={styles.eventInfo}>
            <p>Тип крови:</p>
            <p>Кол-во крови:</p>
            <p>Дата проведения:</p>
            <p>Приоритет:</p>
          </div>
        ) : (
          ""
        )}

        {event?.map((el) =>
          el.active ? (
            <div className={styles.eventBlock}>
              <p>
                {el?.bloodTypeId === 1
                  ? "O(I) Rh+"
                  : el?.bloodTypeId === 2
                  ? "O(I) Rh-"
                  : el?.bloodTypeId === 3
                  ? "A(II) Rh+"
                  : el?.bloodTypeId === 4
                  ? "A(II) Rh-"
                  : el?.bloodTypeId === 5
                  ? "B(III) Rh+"
                  : el?.bloodTypeId === 6
                  ? "B(III) Rh-"
                  : el?.bloodTypeId === 7
                  ? "AB(IV) Rh+"
                  : el?.bloodTypeId === 8
                  ? "AB(IV) Rh-"
                  : "Тип крови не найдено"}
              </p>
              <p>{el.bloodQuantity}L</p>
              <p>{el.eventDate}</p>
              <p>{el.priority}</p>
              <Link to={`/hospital/event/${el.id}`}>
                <button type="button" className="btn btn-success">
                  Начать сбор
                </button>
              </Link>
            </div>
          ) : (
            ""
          )
        )}

        <div className={styles.eventLink}>
          <Link to={"/hospital/event"}>
            <button type="button" className="btn btn-success">
              Создать события
            </button>
          </Link>
        </div>
      </div>

      <h3>Архивные события</h3>
      <div className={styles.hospitalArchivedEvents}>
        <div className={styles.hospitalArchivedEventsList}>
          <p>Тип крови:</p>
          <p>Кол-во крови:</p>
          <p>Дата публикации:</p>
          <p>Приоритет:</p>
        </div>
        {archivedEvents?.map((el) => (
          <div className={styles.eventBlock}>
            <p>
              {el?.bloodTypeId === 1
                ? "O(I) Rh+"
                : el?.bloodTypeId === 2
                ? "O(I) Rh-"
                : el?.bloodTypeId === 3
                ? "A(II) Rh+"
                : el?.bloodTypeId === 4
                ? "A(II) Rh-"
                : el?.bloodTypeId === 5
                ? "B(III) Rh+"
                : el?.bloodTypeId === 6
                ? "B(III) Rh-"
                : el?.bloodTypeId === 7
                ? "AB(IV) Rh+"
                : el?.bloodTypeId === 8
                ? "AB(IV) Rh-"
                : "Тип крови не найдено"}
            </p>
            <p>{el.bloodQuantity}L</p>
            <p>{el.eventDate}</p>
            <p>{el.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hospital;
