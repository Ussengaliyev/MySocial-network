import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return ( 
<div>
    <div>
      <img src='https://w0.peakpx.com/wallpaper/830/235/HD-wallpaper-anime-jujutsu-kaisen-blue-eyes-boy-satoru-gojo-white-hair.jpg' />
    </div >
    <div className = {s.descriptionBlock}>
    ava + decription
    </div>
</div >);
}

export default ProfileInfo;