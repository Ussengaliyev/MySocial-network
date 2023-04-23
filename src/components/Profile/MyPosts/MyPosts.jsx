import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);

const AddNewPostFrom = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name = 'newPostText' component = {Textarea} validate={[required, maxLength10]} 
        placeholder = 'Post message' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFromRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostFrom);
 

const MyPosts = (props) => {
  let postsElements = props.posts.map (p => <Post message= {p.message} likesCount= {p.likesCount} />);
  
  let newPostElement = React.createRef();
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
}
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <AddNewPostFromRedux onSubmit = {onAddPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}



export default MyPosts;