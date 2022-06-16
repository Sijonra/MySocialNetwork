import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";

const LoginContainer = props =>{
    return <Login {...props} logIn={props.logIn}/>
}

let mapStateToProps = state =>{
    return{
        isLoggedIn: state.auth.isLoggedIn,
        userId: state.auth.id,
        isFetching: state.auth.isFetching,
        loginErrorStatus: state.auth.loginErrorStatus,
    }
}

let mapDispatchToProps = dispatch =>{
    return{
        logIn: (email, password, rememberMe) => {
            dispatch(logIn(email, password, rememberMe))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);