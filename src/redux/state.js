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
      ]
    },
    sidebar: {}
},

getState() {
  return this._state;
},

  _callSubscriber() {
      console.log('State changed');
    },
  
  addPost ()  {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    },
  updateNewPostText  (newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
    },
  
  subscribe  (observer)  {
      this._callSubscriber = observer; //observer
    }
};

export default store;
window.store = store;
  
   
  
    