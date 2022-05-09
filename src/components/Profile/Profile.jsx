import AllPosts from './AllPosts/AllPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
      </div>
      <div>
        ava + desc
        {/* <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg' /> */}
      </div>
      <AllPosts />
    </div>
  )
}

export default Profile;