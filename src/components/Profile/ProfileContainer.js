import React from 'react'
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus,} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    //23717
    //139
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    render() {
        return(
            <Profile updateUserStatus={this.props.updateUserStatus} userProfileInfo={this.props.userProfileInfo} {...this.props} />
        )
    }

}

let mapStateToProps = (state) =>{
    return{
        userProfileInfo: state.profilePage.userInfo,
        isLoggedIn: state.auth.isLoggedIn,
        userId: state.auth.id,
        userStatus: state.profilePage.userStatus,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        getUserProfile: (userId)=>{
            dispatch(getUserProfile(userId));
        },
        getUserStatus: (userId)=>{
            dispatch(getUserStatus(userId))
        },
        updateUserStatus: (status)=>{
            dispatch(updateUserStatus(status))
        },
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

let res = compose(withRouter, withAuthRedirect)(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(res);