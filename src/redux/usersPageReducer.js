import {userApi} from "../api/api";

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS = "SET_USERS"
const TOGGLE_PRE_LOADER = "TOGGLE_PRE_LOADER"
const TOGGLE_FOLLOW_BUTTON = "TOGGLE_FOLLOW_BUTTON"
const TOGGLE_FOLLOW_FETCHING = "TOGGLE_FOLLOW_FETCHING"
const UN_TOGGLE_FOLLOW_FETCHING = "UN_TOGGLE_FOLLOW_FETCHING"

let initialState = {
    totalUsersCount: 21,
    usersOnPage: 5,
    currentPage: 1,
    users: [],
    preLoader: false,
    followFetching: [],
}

const usersPageReducer = (state = initialState, action) =>{
    let tmpState = {...state}
    tmpState.users = [...state.users]
    tmpState.followFetching = [...state.followFetching]
    switch (action.type){
        case SET_TOTAL_USERS_COUNT:{
            tmpState.totalUsersCount = action.totalUsersCount
            return tmpState
        }
        case SET_CURRENT_PAGE:{
            tmpState.currentPage = action.pageNumber
            return tmpState
        }
        case SET_USERS:{
            tmpState.users = action.users
            return tmpState
        }
        case TOGGLE_PRE_LOADER:{
            tmpState.preLoader ? tmpState.preLoader = false : tmpState.preLoader = true
            return tmpState
        }
        case TOGGLE_FOLLOW_BUTTON: {
            tmpState.users.map(user=>{
                if(user.id === action.userId){
                    user.followed ? user.followed = false : user.followed = true;
                }
                return tmpState;
            })
            return tmpState;
        }
        case TOGGLE_FOLLOW_FETCHING: {
            tmpState.followFetching = [...state.followFetching, action.userId]
            return tmpState;
        }
        case UN_TOGGLE_FOLLOW_FETCHING:{
            tmpState.followFetching = tmpState.followFetching.filter(id => id !== action.userId);
            return tmpState;
        }
        default:{
            return state
        }
    }
}

export let setTotalUsersCountAC = (totalUsersCount) => {return{type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}}
export let setCurrentPageAC = (pageNumber) => {return{type: SET_CURRENT_PAGE, pageNumber: pageNumber}}
export let setUsersAC = (users) => {return{type: SET_USERS, users: users}}
export let togglePreLoaderAC = () => {return{type: TOGGLE_PRE_LOADER}}
export let toggleFollowButtonAC = (userId) => {return{type: TOGGLE_FOLLOW_BUTTON, userId: userId}}
export let toggleFollowFetchingAC = (userId) => {return{type: TOGGLE_FOLLOW_FETCHING, userId: userId}}
export let unToggleFollowFetchingAC = (userId) => {return{type: UN_TOGGLE_FOLLOW_FETCHING, userId: userId}}

export const getUsers = (currentPage, usersOnPage) =>{
    return (dispatch) =>{
        userApi.getTotalUsersCount().then((data)=>{
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
        userApi.getUsers(currentPage, usersOnPage).then((data)=>{
            dispatch(setUsersAC(data.items));
            togglePreLoaderAC();
        })
    }
}

export const setCurrentPage = (pageNumber, usersOnPage) =>{
    return (dispatch) =>{
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(togglePreLoaderAC());
        userApi.getUsers(pageNumber, usersOnPage).then((data)=>{
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(togglePreLoaderAC());
        })
    }
}

export const followUser = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleFollowFetchingAC(userId))
        userApi.followUser(userId).then(response=>{
            dispatch(toggleFollowButtonAC(userId))
            dispatch(unToggleFollowFetchingAC(userId))
        })
    }
}

export const unFollowUser = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleFollowFetchingAC(userId))
        userApi.unFollowUser(userId).then(response=>{
            dispatch(toggleFollowButtonAC(userId))
            dispatch(unToggleFollowFetchingAC(userId))
        })
    }
}

export default usersPageReducer;