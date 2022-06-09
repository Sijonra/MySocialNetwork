import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    getUsers, setCurrentPage, unFollowUser,
} from "../../redux/usersPageReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    setCurrentPage = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber, this.props.usersOnPage);
    }

    render(){
        let totalUsersPages = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);
        return(
            <Users
                {...this.props}
                totalUsersPages={totalUsersPages}
                setCurrentPage={this.setCurrentPage}
                toggleFollowButton={this.toggleFollowButton}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return(
        {
            totalUsersCount: state.usersPage.totalUsersCount,
            usersOnPage: state.usersPage.usersOnPage,
            currentPage: state.usersPage.currentPage,
            users: state.usersPage.users,
            preLoader: state.usersPage.preLoader,
            followFetching: state.usersPage.followFetching,
            isLoggedIn: state.auth.isLoggedIn,
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return{
        getUsers: (currentPage, usersOnPage) =>{
            dispatch(getUsers(currentPage, usersOnPage))
        },
        setCurrentPage: (pageNumber, usersOnPage) =>{
            dispatch(setCurrentPage(pageNumber, usersOnPage));
        },
        followUser: (userId) =>{
            dispatch(followUser(userId));
        },
        unFollowUser: (userId) =>{
            dispatch(unFollowUser(userId));
        }
    }
}

let res = compose(withAuthRedirect)(UsersContainer)

export default connect(mapStateToProps, mapDispatchToProps)(res);