import styles from './AllPosts.module.css';
import Post from './Post/Post';

const AllPosts = (props) => {
  
  let posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: "It's my first post!", likesCount: 15}
  ];

  let postElements = props.posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />);

  return (
    <div>
      My posts1
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default AllPosts;