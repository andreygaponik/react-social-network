import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name: 'Andrey Gaponik'},
    {id: 2, name: 'John Smith'}
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'test'}
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <DialogItem name={dialogsData[0].name} id="1" />
        <DialogItem name='John Smith' id="2" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi" />
        <Message message="test" />
      </div>
    </div>
  )
}

export default Dialogs;