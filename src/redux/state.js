const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
        posts:[
            {id: 1, message: 'Hi, how are u?', likesCount: 100 },
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102}
          ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
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
    },
    sidebar: {}
},
 _callSubscriber() {
  console.log('State changed');
},

  getState() {
  return this._state;
},
  subscribe  (observer)  {
  this._callSubscriber = observer; //observer
},

dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 7, message: body});
      this._callSubscriber(this._state);
    }
  }

};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;
  
   
  
    