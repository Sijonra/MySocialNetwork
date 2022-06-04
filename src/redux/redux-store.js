import {combineReducers, createStore} from "redux";
import usersPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    usersPage: usersPageReducer,
    profilePage: profilePageReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};
