import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profiile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
        posts:[
            {id: 1, message: 'Hi, how are u?', likesCount: 100 },
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102}
          ],
        newPostText: ''
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
  
   
  
    