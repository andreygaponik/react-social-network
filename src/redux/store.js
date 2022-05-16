import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: "It's my first post!", likesCount: 15 }
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
        { id: 1, message: 'Hi' },
        { id: 2, message: 'test' },
      ],
      newMessageText: 'message text'
    },
    sidebar: {
      friends: [
        { id: 1, username: 'Andrey', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg' },
        { id: 2, username: 'John', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg' },
        { id: 3, username: 'Barry', avatar: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg' }
      ]
    }
  },
  _callSubscriber() {
    console.log('no observer');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;