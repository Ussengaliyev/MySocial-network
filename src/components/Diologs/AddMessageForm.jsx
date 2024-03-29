import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validators"
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength50 =  maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                validate={[required, maxLength50]}
                name='newMessageBody'
                placeholder='Enter your message' />
            <button>Send</button>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
