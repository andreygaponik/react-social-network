import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: 'Andrey Gaponik'},
    {id: 2, name: 'John Smith'}
  ];

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'test'}
  ];

  let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} />);
  let messagesElements = messages.map(el => <Message message={el.message} id={el.id} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;