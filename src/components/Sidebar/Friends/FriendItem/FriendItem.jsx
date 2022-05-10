const FriendItem = (props) => {
  return (
    <div>
      <div className='user_avatar'>
        <img src={props.avatar} />
      </div>
      <div className='user_name'>
        {props.username}
      </div>
    </div>
  )
}

export default FriendItem;