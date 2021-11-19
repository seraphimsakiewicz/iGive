import { Link } from 'react-router-dom';

import styles from './style.module.css';
const Nav = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} to='/'>
            iGive
          </Link>
          <nav className={styles.nav}>
            <Link className={styles.navLink} aria-current='page' to='/login'>
              Login
            </Link>
            <Link className={styles.navLink} aria-current='page' to='/register'>
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
