const ADD_POST = 'ADD_POST'
const SET_USER_INFO = 'SET_USER_INFO'

let initialState = {
    posts: [
        {id: 0, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
        {id: 1, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
    ],
    userInfo: null,
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
        default: {
            return state;
        }
    }
}

export let setUserInfoAC = (data) => ({type: SET_USER_INFO, data: data})
export let addPostAC = (id, text, likes) => {return{type: ADD_POST, id: id, text: text, likes: likes,}}

export default profilePageReducer;