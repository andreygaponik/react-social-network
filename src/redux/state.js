let rerenderEntireTree;

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi', likesCount: 12},
      {id: 2, message: "It's my first post!", likesCount: 15}
    ],
    newPostText: 'post text'
  },
  dialogsPage: {
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
      {id: 1, message: 'Hi'},
      {id: 2, message: 'test'},
    ],
    newMessageText: 'message text'
  },
  sidebar: {
    friends: [
      {id: 1, username: 'Andrey', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg'},
      {id: 2, username: 'John', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg'},
      {id: 3, username: 'Barry', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg'}
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;