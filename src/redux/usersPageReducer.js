const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS = "SET_USERS"
const TOGGLE_PRE_LOADER = "TOGGLE_PRE_LOADER"

let initialState = {
    totalUsersCount: 21,
    usersOnPage: 5,
    currentPage: 1,
    users: [],
    preLoader: false,
}

const usersPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_TOTAL_USERS_COUNT:{
            let tmpState = {...state}
            tmpState.totalUsersCount = action.totalUsersCount
            return tmpState
        }
        case SET_CURRENT_PAGE:{
            let tmpState = {...state}
            tmpState.currentPage = action.pageNumber
            return tmpState
        }
        case SET_USERS:{
            let tmpState = {...state}
            tmpState.users = action.users
            return tmpState
        }
        case TOGGLE_PRE_LOADER:{
            let tmpState = {...state}
            tmpState.preLoader ? tmpState.preLoader = false : tmpState.preLoader = true
            return tmpState
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

export default usersPageReducer;