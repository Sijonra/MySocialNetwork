import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {incrementPageAC} from "../../redux/usersPageReducer";

class UsersContainer extends React.Component {
    render(){
        return(
            <Users
                page={this.props.page}
                incrementPage={this.props.incrementPage}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return(
        {
            page: state.usersPage.page,
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return{
        incrementPage: ()=> {
            dispatch(incrementPageAC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);