import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path="/profile/*"
              element={<Profile
                state={props.state.profilePage}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
              />
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs
                state={props.state.dialogsPage} 
                updateMessageText={props.updateMessageText}
                addMessage={props.addMessage}
                />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
