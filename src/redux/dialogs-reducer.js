const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Andrey Gaponik',
      avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg'
    },
    {
      id: 2,
      name: 'John Smith',
      avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg'
    }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'test' },
  ],
  newMessageText: 'message text'
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_MESSAGE: {
      // let newMessage = {
      //   id: 5,
      //   message: state.newMessageText,
      // };
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: state.newMessageText}],
        newMessageText: ''
      };
      // stateCopy.messages = [...state.messages]; 
      // stateCopy.messages.push(newMessage);
      // stateCopy.newMessageText = '';
    }
      
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newMessage
      };
      // stateCopy.newMessageText = action.newMessage;
    }
      
    default: return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateMessageActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
  }
}

export default dialogsReducer;