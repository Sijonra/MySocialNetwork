import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) =>{
    let tmpState = {...state}
    switch (action.type){
        case INITIALIZED_SUCCESS:{
            tmpState.initialized = true;
            return tmpState;
        }
        default: {
            return state;
        }
    }
}

export const initializedSuccessAC = () =>{return{type: INITIALIZED_SUCCESS}}

export const initializeApp = () =>{
    return (dispatch) =>{
        let promise = dispatch(getAuthUserData());
        promise.then(()=>{
            dispatch(initializedSuccessAC())
        })
    }
}

export default appReducer;