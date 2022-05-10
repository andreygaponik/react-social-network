import FriendItem from './FriendItem/FriendItem';
import styles from './Friends.module.css';

const Friends = (props) => {
  let friends = props.state.friends.map(el => <FriendItem id={el.id} username={el.username} avatar={el.avatar} />);

  return (
    <div>
      <h3>Friends</h3>
      {friends}
    </div>
  )
}

export default Friends;