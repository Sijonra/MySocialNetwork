import {authApi} from "../api/api";
const LOG_OUT = 'LOG_OUT';
const AUTH_USER = 'AUTH_USER';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_LOGIN_ERROR_STATUS = 'SET_LOGIN_ERROR_STATUS';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,
    isFetching: false,
    loginErrorStatus: '',
}

const authReducer = (state = initialState, action) =>{
    let tmpState = {...state}
    switch (action.type){
        case AUTH_USER:{
            tmpState.id = action.id
            tmpState.login = action.login
            tmpState.email = action.email
            tmpState.login ? tmpState.isLoggedIn = true : tmpState.isLoggedIn = false
            return tmpState;
        }
        case LOG_OUT:{
            tmpState.id = null
            tmpState.login = null
            tmpState.email = null
            tmpState.isLoggedIn = false
            return tmpState;
        }
        case TOGGLE_FETCHING:{
            tmpState.isFetching ? tmpState.isFetching = false : tmpState.isFetching = true;
            return tmpState;
        }
        case SET_LOGIN_ERROR_STATUS:{
            tmpState.loginErrorStatus = action.loginErrorStatus
            return tmpState;
        }
        default:{
            return state;
        }
    }
}

export let authUserAC = (id, login, email) => ({type: AUTH_USER, id: id, login: login, email: email})
export let logOutAC = () => {return{type: LOG_OUT}}
export let toggleFetchingAC = () =>{return{type: TOGGLE_FETCHING}}
export let setLoginErrorStatus = (loginErrorStatus) =>{return{type: SET_LOGIN_ERROR_STATUS, loginErrorStatus: loginErrorStatus}}

export const getAuthUserData = () =>{
    return (dispatch) =>{
        return authApi.authUser().then(data=>{
            if(data.resultCode === 0){
                dispatch(authUserAC(data.data.id, data.data.login, data.data.email))
            }
        })
    }
}

export const logIn = (email, password, rememberMe) =>{
    return dispatch =>{
        //console.log(email, password, rememberMe)
        dispatch(toggleFetchingAC());
        authApi.logIn(email, password, rememberMe).then(data=>{
            console.log(data);
            dispatch(toggleFetchingAC());
            if(data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else if(data.resultCode === 1){
                dispatch(setLoginErrorStatus('Неверный пароль'))
            }
        })
    }
}

export const logOut = () =>{
    return dispatch =>{
        authApi.logOut().then(data=>{
            if(data.resultCode === 0){
                dispatch(logOutAC());
            }
            console.log(data);
        })
    }
}

export default authReducer;