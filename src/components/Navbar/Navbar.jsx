import { NavLink } from 'react-router-dom';
import Friends from '../Sidebar/Friends/Friends';
import styles from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<aside className='aside'>
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
      <div className='sidebar'>
        <Friends state={props.state} />
      </div>
    </aside>
	)
}

export default Navbar;