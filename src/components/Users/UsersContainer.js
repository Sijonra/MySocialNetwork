import React from "react";
import Users from "./Users";
import {connect} from "react-redux";

class UsersContainer extends React.Component {
    render(){
        //alert(1);
        return(
            <Users />
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

export default connect(mapStateToProps)(UsersContainer);