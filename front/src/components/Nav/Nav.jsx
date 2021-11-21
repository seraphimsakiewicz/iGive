import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import styles from "./style.module.css";
const Nav = () => {
  const { role } = useParams();
  const user = useSelector((state) => state?.user);
  const hospital = useSelector((state) => state?.hospital);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} to="/">
            iGive
          </Link>
          {user && (
            <Link className={styles.logo} to={`/private/user`}>
              Личный кабинет
            </Link>
          )}
          {hospital && (
            <Link className={styles.logo} to={`/private/hospital`}>
              Личный кабинет
            </Link>
          )}
          {/* <Link className={styles.logo} to={`/private/${role}`}>
            Личный кабинет
          </Link> */}
          <Link className={styles.logo} to={`/logout/${role}`}>
            Log out
          </Link>
          <Link className={styles.logo} to={`/confirmedForm`}>
            Confirmed Form
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
