const ADD_POST = 'ADD_POST'

let initialState = {
    posts: [
        {id: 0, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
        {id: 1, text: 'Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!', likes: 12,},
    ],
    userInfo:{
        fullName: 'Илья Давыденко',
        aboutMe: 'я крутой нахрен блин',
        lookingForAJob: true,
        userId: 0,
        photos:{
            small: '',
            large: '',
        },
        contacts:{
            twitter: '',
            vk: '',
            instagram: '',
            github: ''
        }
    },
}

const profilePageReducer = (state = initialState, action) =>{
    let tmpState = {...state};
    switch (action.type){
        case ADD_POST: {
            let post = {
                text: action.text,
                likes: action.likes,
            }
            tmpState.posts = [...state.posts]
            tmpState.posts.push(post)
            return tmpState;
        }
        default: {
            return state;
        }
    }
}

export let addPostAC = (text, likes) => {return{type: ADD_POST, text: text, likes: likes,}}

export default profilePageReducer;