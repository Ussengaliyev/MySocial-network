import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src='https://img.quizur.com/f/img61c4bc261c4200.12679417.jpg?lastEdited=1640283179' />
      {props.message}
      <div>
        <span>♥</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post;