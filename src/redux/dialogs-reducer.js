const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Eldan'}, 
        {id: 2, name: 'Eldan'},
        {id: 3, name: 'Eldan'},
        {id: 4, name: 'Eldan'},
        {id: 5, name: 'Eldan'},
        {id: 6, name: 'Eldan'}
      ],
    messages: [
        {id: 1, message: 'учись'}, 
        {id: 2, message: 'учись'},
        {id: 3, message: 'учись'},
        {id: 4, message: 'учись'},
        {id: 5, message: 'учись'},
        {id: 6, message: 'учись'}
  ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

        let body = action.newMessageBody;
            return { 
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;