let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {
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
}
window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; //observer
}

export default state;
  
   
  
    