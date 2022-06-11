import {authApi} from "../api/api";

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
        default:{
            return state;
        }
    }
}

export let authUserAC = (id, login, email) => ({type: AUTH_USER, id: id, login: login, email: email})

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
                getAuthUserData();
            }
        })
    }
}

export default authReducer;