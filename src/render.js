import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from './redux/state';


export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    posts = {state.profilePage.posts}
    dialogs = {state.dialogsPage.dialogs} 
    messages = {state.dialogsPage.messages}
    addPost = {addPost}
    updateNewPostText = {updateNewPostText}
    newPostText = {state.profilePage.newPostText}/>
    
  </React.StrictMode>
);
}

