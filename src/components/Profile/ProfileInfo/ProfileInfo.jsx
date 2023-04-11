import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  

  return (
    <div>
      <div>
        <img src='https://img1.badfon.ru/wallpaper/big/3/47/art-yoneyu-anime-naruto.jpg' />
      </div >
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + decription
      </div>
    </div >);
}

export default ProfileInfo;