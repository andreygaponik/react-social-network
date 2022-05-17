const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi', likesCount: 12 },
    { id: 2, message: "It's my first post!", likesCount: 15 }
  ],
  newPostText: 'post text'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0 }],
        newPostText: ''
      }
      
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    'newText': text
  }
}

export default profileReducer;