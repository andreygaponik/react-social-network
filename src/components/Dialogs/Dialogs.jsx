import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar} />);
  let messagesElements = props.state.messages.map(el => <Message message={el.message} id={el.id} />);
  let messageArea = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let updateMessage = () => {
    let text = messageArea.current.value;
    props.dispatch(updateMessageActionCreator(text));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsElements}
      </div>
      <div>
        <div className={styles.messages}>
          {messagesElements}
        </div>
        <div>
          <textarea onChange={updateMessage} ref={messageArea} value={props.state.newMessageText}></textarea>
          <button onClick={addMessage}>Add message</button> 
        </div>
      </div>
    </div>
  )
}

export default Dialogs;