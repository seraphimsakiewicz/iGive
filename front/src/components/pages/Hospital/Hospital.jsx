import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allEventHospitalFromServer } from "../../../redux/ac/eventAC";
import { allhospitalMyDonorFromServer } from "../../../redux/ac/hospitalMyDonorAC";
import styles from "./style.module.css";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Hospital() {
  const { event } = useSelector((state) => state);
  const archivedEvents = event.filter((el) => el.active === false);
  // const myDonors = archivedEvents.map(el => ({user:el.User.name}))
  console.log(archivedEvents);
  // console.log(myDonors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventHospitalFromServer());
  }, [dispatch]);

  // const activeEventsLength = event?.filter(
  //   (event) => event.active === true
  // ).length;

  useEffect(() => {
    dispatch(allhospitalMyDonorFromServer());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={styles.event}>
        {event ? (
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
      <Tabs>
        <TabList>
          <Tab >
            Архивные события
          </Tab>
          <Tab >
            Мои доноры
          </Tab>
        </TabList>
        <TabPanel>
          <div className={styles.hospitalArchivedEvents}>
            {
              archivedEvents.length === 0 ? 'Нет архивных событий' :
                <div className={styles.hospitalArchivedEventsList}>
                  <p>Тип крови:</p>
                  <p>Кол-во крови:</p>
                  <p>Дата публикации:</p>
                  <p>Приоритет:</p>
                </div>
            }
            {archivedEvents?.map((el) => (
              <div className={styles.eventBlock}>
                {/* <p>{el.bloodTypeId}</p> */}
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
                <p>{el.bloodQuantity}</p>
                <p>{el.eventDate}</p>
                <p>{el.priority}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <ul className="list-group">
            {
              archivedEvents?.map(el => el.Users?.map((el, index) => <li className="list-group-item my-2" key={el.id}>&nbsp;{el.name}&nbsp;{el.lastName}</li>))
            }
          </ul>
        </TabPanel>
      </Tabs>

    </div>
  );
}

export default Hospital;
