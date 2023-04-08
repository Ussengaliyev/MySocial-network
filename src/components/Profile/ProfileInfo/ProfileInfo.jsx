import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return ( 
<div>
    <div>
      <img src='https://img1.badfon.ru/wallpaper/big/3/47/art-yoneyu-anime-naruto.jpg' />
    </div >
    <div className = {s.descriptionBlock}>
    ava + decription
    </div>
</div >);
}

export default ProfileInfo;