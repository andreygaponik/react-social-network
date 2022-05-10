import AllPosts from './AllPosts/AllPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <AllPosts posts={props.state.posts} addPost={props.addPost} newPostText={props.state.newPostText} updatePostText={props.updatePostText} />
    </div>
  )
}

export default Profile;