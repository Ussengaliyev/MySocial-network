import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;

  return (<div>
    <ProfileInfo/>
    <MyPosts posts = {props.posts} addPost = {props.addPost}/>
  </div>);
}

export default Profile;