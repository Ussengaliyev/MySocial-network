import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  
return (
    <div>
      {/* <div>
        <img src='https://img1.badfon.ru/wallpaper/big/3/47/art-yoneyu-anime-naruto.jpg' />
      </div > */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status = {'I am a person, who is full of enthusiasm :)'}/>
      </div>
    </div >);
}

export default ProfileInfo;