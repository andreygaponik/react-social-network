import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' className={(navData) => navData.isActive ? styles.active : '' }>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' className={(navData) => navData.isActive ? styles.active : '' }>Dialogs</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' className={(navData) => navData.isActive ? styles.active : '' }>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/music' className={(navData) => navData.isActive ? styles.active : '' }>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/settings' className={(navData) => navData.isActive ? styles.active : '' }>Settings</NavLink>
      </div>
    </nav>
	)
}

export default Navbar;