import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/Navbar/Navbar';
import Music from './components/Navbar/Navbar';
import Settings from './components/Navbar/Navbar';
import DialogsContainer from './components/Diologs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path = '/profile' element ={ <ProfileContainer />}/>
          <Route path= '/dialogs' element = {<DialogsContainer />} />

          <Route path= '/users' element = {<UsersContainer />} />

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



