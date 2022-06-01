const INCREMENT = "INCREMENT";

let initialState = {
    page: 1,
}

const usersPageReducer = (state = initialState, action) =>{
    switch (action.type){
        case INCREMENT:{
            let tmpState = {...state};
            tmpState.page++;
            return tmpState;
        }
        default:{
            return state;
        }
    }
}

export let incrementPageAC = () => {return{type: INCREMENT}};

export default usersPageReducer;