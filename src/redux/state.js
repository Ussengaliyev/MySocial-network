import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts:[
            {id: 1, message: 'Hi, how are u?', likesCount: 100 },
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102},
            {id: 2, message: 'It is my first post', likesCount: 102}
          ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Suneiya'}, 
            {id: 2, name: 'Suneiya'},
            {id: 3, name: 'Eldan'},
            {id: 4, name: 'Suneiya'},
            {id: 5, name: 'Suneiya'},
            {id: 6, name: 'Suneiya'}
          ],
        messages: [
            {id: 1, message: 'здравствуйте'}, 
            {id: 2, message: 'я норм человек'},
            {id: 3, message: 'Учись'},
            {id: 4, message: 'я не бываю грубой'},
            {id: 5, message: 'я никогда не облажаюсь'},
            {id: 6, message: 'я девочка'}
      ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}


export default state;
  
   
  
    