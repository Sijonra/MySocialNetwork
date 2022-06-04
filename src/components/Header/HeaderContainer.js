import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authApi} from "../../api/api";
import {authUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authApi.authUser().then(data=>{
            //console.log(data)
            this.props.setUserLoggedIn(data.id, data.login, data.email)
        })
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
        setUserLoggedIn: (id, login, email)=>{
            dispatch(authUser(id, login, email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
