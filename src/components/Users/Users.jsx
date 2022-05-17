import styles from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../assets/images/default_avatar.png';

let Users = (props) => {
  if (props.users.length == 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
    });

    // props.setUsers([
    //   { id: 1, photoUrl: 'https://mysekret.ru/wp-content/uploads/2021/12/colton-sturgeon-me5ohzrwn-q-unsplash-740x1110.jpg', followed: true, fullName: 'Andrey G.', status: 'some status 1', location: { country: 'Belarus', city: 'Minsk' } },
    //   { id: 2, photoUrl: 'https://mysekret.ru/wp-content/uploads/2021/12/colton-sturgeon-me5ohzrwn-q-unsplash-740x1110.jpg', followed: false, fullName: 'Valentin J.', status: 'some status 2', location: { country: 'Russia', city: 'Moscow' } },
    //   { id: 3, photoUrl: 'https://mysekret.ru/wp-content/uploads/2021/12/colton-sturgeon-me5ohzrwn-q-unsplash-740x1110.jpg', followed: false, fullName: 'Dmitry V.', status: 'some status 3', location: { country: 'Belarus', city: 'Minsk' } },
    //   { id: 4, photoUrl: 'https://mysekret.ru/wp-content/uploads/2021/12/colton-sturgeon-me5ohzrwn-q-unsplash-740x1110.jpg', followed: false, fullName: 'John S.', status: 'some status 4', location: { country: 'Ukrain', city: 'Kiev' } },
    // ])
  }
  return (
    <div>
      {props.users.map((user) => <div key={user.id}>
        <span>
          <div>
            <img src={user.photos.small != null ? user.photos.small : defaultAvatar} className={styles.user_avatar} />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
              : <button onClick={() => props.follow(user.id)}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            {/* <div>{user.location.country}</div>
            <div>{user.location.city}</div> */}
            <div>Belarus</div>
            <div>Minsk</div>
          </span>
        </span>
      </div>)}
    </div>
  )
}

export default Users;

//  