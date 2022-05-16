import React from 'react';
import styles from './AllPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';

const AllPosts = (props) => {
  console.log(props);
  let postElements = props.posts.map(el => <Post id={el.id} message={el.message} likesCount={el.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <div>
      My posts1
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default AllPosts;