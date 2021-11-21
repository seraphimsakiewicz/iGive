import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./style.module.css";
const Nav = () => {
  const { user } = useSelector((state) => state);
  const { hospital } = useSelector((state) => state);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} to="/">
            iGive
          </Link>
          {
            user ?
            <>
            Здравстуйте, {user.name}
              <Link className={styles.logo} to={`/private/${user.role}`}>
                Личный кабинет
              </Link>

              <Link className={styles.logo} to={`/logout/${user.role}`}>
                Log out
              </Link>
            </>
              :
              ''
          }
          {
            hospital ?
            <>
            Здравстуйте, {hospital.headOfDep}
              <Link className={styles.logo} to={`/private/${hospital.role}`}>
                Личный кабинет
              </Link>

              <Link className={styles.logo} to={`/logout/${hospital.role}`}>
                Log out
              </Link>
            </>
              :
              ''
          }
        </div>
      </div>
    </header>
  );
};

export default Nav;
