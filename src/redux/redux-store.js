import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profiile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;



//1) 1) import {combineReducers, legacy_createStore as createStore} from "redux"; 
// 2) Если у вас белый экран, не волнуйтесь. Проделайте все то, что сделал Димыч, под конец видео ошибка исправится