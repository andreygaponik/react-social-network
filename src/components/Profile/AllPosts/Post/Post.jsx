import styles from './Post.module.css';

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg' />
      {props.message}
      <span>({props.likesCount} likes)</span>
    </div>
  )
}

export default Post;