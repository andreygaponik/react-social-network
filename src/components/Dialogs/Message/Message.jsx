import styles from '../Dialogs.module.css';

const Message = (props) => {
  return (
    <div>
      <div className={styles.message}>
        {props.message}
      </div>
    </div>
  )
}

export default Message;