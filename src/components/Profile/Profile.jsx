import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (<div>
    <ProfileInfo/>
    <MyPosts posts = {props.posts} 
    addPost = {props.addPost} 
    dispatch = {props.dispatch}
    newPostText = {props.newPostText}
    />
  </div>);
}

export default Profile;