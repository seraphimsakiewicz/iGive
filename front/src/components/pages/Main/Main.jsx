import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Loader from "../../Loader/Loader";


function Main() {
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
// // check

//     setTimeout(() => {
//       setIsLoading(false)
//       // set
//     }, 3000)
//   }, [])

  return (
    <main className={styles.main}>
      {/* {
        isLoading ? <Loader /> : */}
      <div className='container'>

      <div className={styles.mainWrapper}>
        <p className={styles.mainTitle}>Welcome to iGive!!!</p>
        <div className={styles.mainButtons}>
          <Link aria-current="page" to={`/login/user`}>
            <div className={styles.userBlock}>
              <p className={styles.userTitle}>Стать донором</p>
            </div>
          </Link>
          <Link aria-current="page" to={`/login/hospital`}>
            <div className={styles.hospitalBlock}>
              <p className={styles.hospitalTitle}>Я больница</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
      {/* } */}

    </main>
  );
}

export default Main;
