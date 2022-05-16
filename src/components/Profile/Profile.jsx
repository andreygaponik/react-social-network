import AllPosts from './AllPosts/AllPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo />
      <AllPosts
        posts={props.state.posts}
        dispatch={props.dispatch}
        newPostText={props.state.newPostText}
      />
    </div>
  )
}

export default Profile;