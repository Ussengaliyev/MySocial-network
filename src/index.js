import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
 
  <React.StrictMode>
    <App 
    posts = {store.getState().profilePage.posts}
    dialogs = {store.getState().dialogsPage.dialogs} 
    messages = {store.getState().dialogsPage.messages}
    addPost = {store.addPost.bind(store)}
    updateNewPostText = {store.updateNewPostText.bind(store)}
    newPostText = {store.getState().profilePage.newPostText}/>
    
  </React.StrictMode>
);
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


