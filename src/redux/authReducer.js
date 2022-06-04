let AUTH_USER = 'AUTH_USER';

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: null,
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

export let authUser = (id, login, email) => ({type: AUTH_USER, id: id, login: login, email: email})

export default authReducer;