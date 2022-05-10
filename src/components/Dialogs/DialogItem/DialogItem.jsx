import styles from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>
        <div className={styles.user_avatar}>
          <img src={props.avatar} />
        </div>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;