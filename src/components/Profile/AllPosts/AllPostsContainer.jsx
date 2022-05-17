import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';
import AllPosts from './AllPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostChange: (text) => {
      dispatch(onPostChangeActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts);

export default AllPostsContainer;