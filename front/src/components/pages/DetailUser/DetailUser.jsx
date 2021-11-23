
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styleDetailUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { allEventUserFromServer } from '../../../redux/ac/eventAC';
import Slider from '../../Slider/Slider';


function DetailUser() {
  const { event } = useSelector((state) => state);
  const { user } = useSelector((state) => state);

  console.log(event)
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventUserFromServer());
  }, []);

  return (
    <div className={styles.event}>
      <div className='container'>
        <div className={styles.eventWrapper}>
          <div className={styles.eventLeftBlock}>

            {
              event?.length === 0 ? null :
                <>
                  <h3 className={styles.eventTitle}>Места для сдачи крови</h3>
                  <div className={styles.eventInfo}>
                    <p className={styles.eventInfoItem}>Название больницы:</p>
                    <p className={styles.eventInfoItem}>Кол-во крови в литрах:</p>
                    <p className={styles.eventInfoItem}>Дата публикации:</p>
                    <p className={styles.eventInfoItem}>Приоритет:</p>
                  </div>
                  {
                    event?.map(el => (
                      <div className={styles.eventBlock}>
                        <p>{el?.Hospital?.headOfDep}</p>
                        <p>{el?.bloodQuantity}</p>
                        <p>{el?.eventDate}</p>
                        <p>{el?.priority}</p>
                        <Link to={`/user/event/${el.id}`}>
                          <button type="button" className="btn btn-info">Подробнее</button>
                        </Link>
                      </div>
                    ))
                  }
                </>
            }

            <Slider />
            <h3>Статистика</h3>
            <p className={styles.eventLeftText}>
              По данным Всероссийского центра изучения общественного мнения
              (ВЦИОМ), за 11 лет численность доноров крови в нашей стране
              выросла с 36% (2008 г.) до 45% (2019 г.). Донорами уже становились
              45% россиян: в том числе 12% — однажды, 14% — 2-3 раза, 19% —
              более 3 раз, отмечается в сообщении центра.
            </p>
            <p className={styles.eventLeftText}>
              Стать донором на территории нашей страны может гражданин России,
              достигший совершеннолетия, и иностранец, проживающий в России не
              менее года. При весе менее 50 кг донорство крови противопоказано.
              Требования к донору, информация о том, как подготовиться к
              донорству, и адреса пунктов сдачи крови перечислены на сайте
              Службы крови Федерального медико-биологического агентства (ФМБА).
            </p>
            <p className={styles.eventLeftText}>
              В России ежегодно в переливании крови нуждаются около 1,5 млн
              человек (более 4 тыс. ежедневно). За 2018 год общее количество
              доноров крови и ее компонентов составило более 1,283 млн человек,
              при этом данными донорами выполнено более 2,5 млн донаций. Около
              97% процедур совершается на безвозмездной основе.
            </p>
          </div>
          <div className={styles.eventRigthBlock}>
            <div className={styles.eventRigthBlockCard}>
              <img
                src="http://localhost:3000/covid/1.jpg"
                className={styles.eventRigthBlockCardImg}
                alt=""
              />
              <p className={styles.eventRigthBlockCardTitle}>
                Коронавирус в России и мире: <br /> хроника событий
              </p>
            </div>
            <div className={styles.eventRigthBlockCard}>
              <img
                src="http://localhost:3000/covid/2.jpg"
                className={styles.eventRigthBlockCardImg}
                alt=""
              />
              <p className={styles.eventRigthBlockCardTitle}>
                Что делать если в семье кто-то <br /> заболел?
              </p>
            </div>
            <div className={styles.eventRigthBlockCard}>
              <img
                src="http://localhost:3000/covid/3.jpg"
                className={styles.eventRigthBlockCardImg}
                alt=""
              />
              <p className={styles.eventRigthBlockCardTitle}>
                Грипп – симптомы и профилактика
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
