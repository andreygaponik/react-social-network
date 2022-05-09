import AllPosts from './AllPosts/AllPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <AllPosts posts={props.posts} />
    </div>
  )
}

export default Profile;