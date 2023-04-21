import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogIItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map( d=> <DialogItem name ={d.name} key = {d.id} id = {d.id} />);
let messagesElements = state.messages.map( m => <Message message = {m.message} key = {m.id} />);
let newMessageBody = state.newMessageBody;


let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
}

if (!props.isAuth ) return <Navigate to = {'/login'} />;

return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component = 'textarea' name = 'newMessageBody' placeholder='Enter your message' />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
  })(AddMessageForm)



export default Dialogs;

