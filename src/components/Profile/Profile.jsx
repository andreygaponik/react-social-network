import AllPosts from './AllPosts/AllPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <AllPosts />
    </div>
  )
}

export default Profile;