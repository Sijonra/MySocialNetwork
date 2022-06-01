const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    totalUsersCount: 21,
    usersOnPage: 5,

}

const usersPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_TOTAL_USERS_COUNT:{
            let tmpState = {...state}
            tmpState.totalUsersCount = action.totalUsersCount;
            return tmpState;
        }
        default:{
            return state
        }
    }
}

export let setTotalUsersCountAC = (totalUsersCount) => {return{type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}}

export default usersPageReducer;