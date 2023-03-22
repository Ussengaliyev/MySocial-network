import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/Navbar/Navbar';
import Music from './components/Navbar/Navbar';
import Settings from './components/Navbar/Navbar';
import DialogsContainer from './components/Diologs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path = '/profile' element ={ <Profile store = {props.store}/>}/>
          <Route path= '/dialogs' element = {<DialogsContainer store = {props.store} />} />
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



