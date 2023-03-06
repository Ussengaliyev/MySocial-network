import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src='https://sun9-41.userapi.com/impg/Xlej1YvdhmD4KLf4D2z4poyuWS0N-Jquswx09A/WeXvkRr0F1A.jpg?size=567x604&quality=96&sign=e903a2d0c302dc3be9c4ef73d7cbcea7&type=album' />
      {props.message}
      <div>
        <span>♥</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post;