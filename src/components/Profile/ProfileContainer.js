import React from 'react'
import Profile from "./Profile";
import {getUserProfile,} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";

class ProfileContainer extends React.Component{
    //23717
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        return(
            <Profile userProfileInfo={this.props.userProfileInfo} />
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        userProfileInfo: state.profilePage.userInfo
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        getUserProfile: (userId)=>{
            dispatch(getUserProfile(userId));
        }
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlProfileContainer);