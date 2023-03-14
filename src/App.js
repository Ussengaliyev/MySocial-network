import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Diologs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/Navbar/Navbar';
import Music from './components/Navbar/Navbar';
import Settings from './components/Navbar/Navbar';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path = '/profile' element ={ <Profile 
          posts = {props.posts}
          addPost = {props.addPost}
          updateNewPostText = {props.updateNewPostText}
          newPostText = {props.newPostText}
          />}/>
          <Route path= '/dialogs' element = {<Dialogs dialogs = {props.dialogs} messages = {props.messages}/>} />
          <Route path = '/news' element = {<News />} />
          <Route path = '/music' element = {<Music />} />
          <Route path = '/settings' element = {<Settings />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;



