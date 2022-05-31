import {combineReducers, createStore} from "redux";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    usersPage: usersPageReducer,
});

let store = createStore(reducers);

window.store = store;

export {store};
