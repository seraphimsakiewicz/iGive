
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styleDetailUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { allEventUserFromServer, deleteMyEvent, deleteMyEventFromServer, myEventUserFromServer } from '../../../redux/ac/eventAC';
import Slider from '../../Slider/Slider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StaticInfo from '../StaticInfo/StaticInfo';
import SideInfo from '../SideInfo/SideInfo';

function DetailUser() {
  const { event } = useSelector((state) => state);
  console.log(event);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventUserFromServer());
  }, [dispatch]);

  return (
    <div className={styles.event}>
      <div className='container'>
        <div className={styles.eventWrapper}>
          <div className={styles.eventLeftBlock}>
            {
              event?.length === 0 ? null :
                <>
                  <h3 className={styles.eventTitle}>Места для сдачи крови</h3>
                  <div>
                    <Tabs>
                      <TabList>
                        <Tab onClick={(e) => dispatch(allEventUserFromServer())} >Все события</Tab>
                        <Tab onClick={(e) => dispatch(myEventUserFromServer())} >Мои</Tab>
                      </TabList>
                      <TabPanel>
                        <div className={styles.eventInfo}>
                          <p className={styles.eventInfoItem}>Название больницы:</p>
                          <p className={styles.eventInfoItem}>Кол-во крови в литрах:</p>
                          <p className={styles.eventInfoItem}>Дата публикации:</p>
                          <p className={styles.eventInfoItem}>Приоритет:</p>
                        </div>
                        {
                          event?.map(el => (
                            <div className={styles.eventBlock}>
                              <p>{el?.Hospital?.title}</p>
                              <p>{el?.bloodQuantity}</p>
                              <p>{el?.eventDate}</p>
                              <p>{el?.priority}</p>
                              <Link to={`/user/event/${el.id}`}>
                                <button type="button" className="btn btn-info">Подробнее</button>
                              </Link>
                            </div>
                          ))
                        }
                      </TabPanel>
                      <TabPanel>
                        <div className={styles.eventInfo}>
                          <p className={styles.eventInfoItem}>Название больницы:</p>
                          <p className={styles.eventInfoItem}>Кол-во крови в литрах:</p>
                          <p className={styles.eventInfoItem}>Дата публикации:</p>
                          <p className={styles.eventInfoItem}>Приоритет:</p>
                        </div>
                        {
                          event?.map(el => (
                            <div className={styles.eventBlock}>
                              {/* <p>{el?.Hospital?.title}</p> */}
                              <p>{el?.bloodQuantity}</p>
                              <p>{el?.eventDate}</p>
                              <p>{el?.priority}</p>
                              <button type="button"  onClick={() => dispatch(deleteMyEvent(el.id))} className="btn btn-danger">Удалить</button>

                            </div>
                          ))
                        }
                      </TabPanel>
                    </Tabs>
                  </div>
                </>
            }
            <Slider />
            <StaticInfo />
          </div>
          <SideInfo />
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
