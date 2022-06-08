import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authUser();
    }

    render(){
        return(
            <Header />
        )
    }
}

let mapStateToProps = state =>{
    return{
        isLoggedIn: state.auth.isLoggedIn,
    }
}

let mapDispatchToProps = dispatch =>{
    return{
        authUser: ()=>{
            dispatch(getAuthUserData());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
