import AllPosts from './AllPosts/AllPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className='app-wrapper-content'>
      <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
      </div>
      <div>
        ava + desc
      </div>
      <AllPosts />
    </div>
  )
}

export default Profile;