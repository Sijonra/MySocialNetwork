import {applyMiddleware, combineReducers, createStore} from "redux";
import usersPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    usersPage: usersPageReducer,
    profilePage: profilePageReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export {store};
