import {combineReducers, createStore} from "redux";
import usersPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    usersPage: usersPageReducer,
    profilePage: profilePageReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};
