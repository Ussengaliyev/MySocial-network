const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Suneiya'}, 
        {id: 2, name: 'Suneiya'},
        {id: 3, name: 'Suneiya'},
        {id: 4, name: 'Suneiya'},
        {id: 5, name: 'Suneiya'},
        {id: 6, name: 'Suneiya'}
      ],
    messages: [
        {id: 1, message: 'здравствуйте'}, 
        {id: 2, message: 'я норм человек'},
        {id: 3, message: 'Мне никогда не стыдно'},
        {id: 4, message: 'я не бываю грубой'},
        {id: 5, message: 'я никогда не облажаюсь'},
        {id: 6, message: 'я девочка'}
  ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { 
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:

        let body = state.newMessageBody;
            return { 
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;