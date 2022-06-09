import {Navigate} from "react-router";

const withAuthRedirect = (Component) =>{
    let Redirect = props =>{
        if(!props.isLoggedIn) return <Navigate to='/login' />
        return <Component {...props} />
    }
    return Redirect;
}
export default withAuthRedirect;