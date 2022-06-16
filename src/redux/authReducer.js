import {authApi} from "../api/api";
let LOG_OUT = 'LOG_OUT';
let AUTH_USER = 'AUTH_USER';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,
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
        default:{
            return state;
        }
    }
}

export let authUserAC = (id, login, email) => ({type: AUTH_USER, id: id, login: login, email: email})
export let logOutAC = () => {return{type: LOG_OUT}}

export const getAuthUserData = () =>{
    return (dispatch) =>{
        authApi.authUser().then(data=>{
            if(data.resultCode === 0){
                dispatch(authUserAC(data.data.id, data.data.login, data.data.email))
            }
        })
    }
}

export const logIn = (email, password, rememberMe) =>{
    return dispatch =>{
        //console.log(email, password, rememberMe)
        authApi.logIn(email, password, rememberMe).then(data=>{
            console.log(data);
            if(data.resultCode === 0) {
                dispatch(getAuthUserData());
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