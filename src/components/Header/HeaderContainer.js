import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    render(){
        return(
            <Header
                {...this.props}
                logOut={this.props.logOut}
            />
        )
    }
}

let mapStateToProps = state =>{
    return{
        isLoggedIn: state.auth.isLoggedIn,
        login: state.auth.login,
        userId: state.auth.id,
    }
}

let mapDispatchToProps = dispatch =>{
    return{
        authUser: ()=>{
            dispatch(getAuthUserData());
        },
        logOut: ()=>{
            dispatch(logOut())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
