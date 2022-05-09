import styles from './AllPosts.module.css';
import Post from './Post/Post';

const AllPosts = () => {
  return (
    <div>
      My posts1
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi" likesCount="10"/>
        <Post message="It's my first post!" likesCount="15" />
      </div>
    </div>
  )
}

export default AllPosts;