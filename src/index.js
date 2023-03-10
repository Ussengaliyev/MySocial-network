import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import {addPost, updateNewPostText} from './redux/state';

 let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

