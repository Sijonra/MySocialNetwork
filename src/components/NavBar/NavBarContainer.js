import NavBar from "./NavBar";
import {connect} from "react-redux";

const NavBarContainer = props =>{
    return <NavBar {...props}/>
}

let mapStateToProps = state =>{
    return{
        userId: state.auth.id,
    }
}

export default connect(mapStateToProps)(NavBarContainer);