import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";

const LoginContainer = props =>{
    return <Login logIn={props.logIn}/>
}

let mapStateToProps = state =>{
    return{}
}

let mapDispatchToProps = dispatch =>{
    return{
        logIn: (email, password, rememberMe) => {
            dispatch(logIn(email, password, rememberMe))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);