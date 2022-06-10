import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_INFO = 'SET_USER_INFO'
const ADD_USER_STATUS = 'ADD_USER_STATUS'

let initialState = {
    posts: [
        {id: 0, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
        {id: 1, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
    ],
    userInfo: null,
    userStatus: null,
}

const profilePageReducer = (state = initialState, action) =>{
    let tmpState = {...state};
    switch (action.type){
        case ADD_POST: {
            let post = {
                id: action.id,
                text: action.text,
                likes: action.likes,
            }
            tmpState.posts = [...state.posts]
            tmpState.posts.push(post)
            return tmpState;
        }
        case SET_USER_INFO: {
            tmpState.userInfo = action.data
            return tmpState;
        }
        case ADD_USER_STATUS: {
            tmpState.userStatus = action.userStatus
            return tmpState;
        }
        default: {
            return state;
        }
    }
}

export let setUserInfoAC = (data) => ({type: SET_USER_INFO, data: data})
export let addPostAC = (id, text, likes) => {return{type: ADD_POST, id: id, text: text, likes: likes,}}
export let addUserStatus = (userStatus) => {return{type: ADD_USER_STATUS, userStatus: userStatus}}

export const getUserProfile = (userId) =>{
    return (dispatch) => {
        profileApi.getUserProfile(userId).then(data => {
            dispatch(setUserInfoAC(data));
        })
    }
}

export const getUserStatus = (userId) =>{
    return (dispatch) =>{
        profileApi.getUserStatus(userId).then(status=>{
            dispatch(addUserStatus(status))
        })
    }
}

export const updateUserStatus = (status) =>{
    return (dispatch) =>{
        profileApi.updateStatus(status).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(addUserStatus(status));
            }
            else{
                console.log(response.data);
                alert('некорректный статус')
            }
        })
    }
}


export default profilePageReducer;