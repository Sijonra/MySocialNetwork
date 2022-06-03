import React from "react";
import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/profilePageReducer";

class PostsContainer extends React.Component{
    render() {
        return(
            <Posts {...this.props} />
        )
    }
}

let mapStateToProps = (state) =>{
    return(
        {
            posts: state.profilePage.posts,
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return(
        {
            handleAddPost: (text, likes)=>{
                dispatch(addPostAC(text, likes))
            }
        }
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);