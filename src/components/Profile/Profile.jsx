import AllPosts from './AllPosts/AllPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import AllPostsContainer from './AllPosts/AllPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <AllPostsContainer
        // store={props.store}
      />
    </div>
  )
}

export default Profile;