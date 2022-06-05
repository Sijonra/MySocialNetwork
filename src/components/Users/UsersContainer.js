import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowButtonAC, toggleFollowFetchingAC,
    togglePreLoaderAC
} from "../../redux/usersPageReducer";
import {userApi} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
        //     this.props.setTotalUsersCount(response.data.totalCount);
        // })
        userApi.getTotalUsersCount().then((data)=>{
            this.props.setTotalUsersCount(data.totalCount);
        })
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response=>{
        //     this.props.setUsers(response.data.items);
        // })
        this.props.togglePreLoader();
        userApi.getUsers(this.props.currentPage, this.props.usersOnPage).then((data)=>{
            this.props.setUsers(data.items);
            this.props.togglePreLoader();
        })
    }

    toggleFollowButton = (userId) =>{
        this.props.toggleFollowButton(userId);
    }

    setCurrentPage = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response=>{
        //     //console.log(response.data.items);
        //     this.props.setUsers(response.data.items);
        //     this.props.setTotalUsersCount(response.data.totalCount);
        // });
        this.props.togglePreLoader();
        userApi.getUsers(pageNumber, this.props.usersOnPage).then((data)=>{
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.togglePreLoader();
        })
    }

    followUser = (userId) =>{
        userApi.followUser(userId).then(response=>{
            this.toggleFollowButton(userId);
        })
    }

    unFollowUser = (userId) =>{
        userApi.unFollowUser(userId).then(response=>{
            this.toggleFollowButton(userId);
        })
    }

    render(){
        let totalUsersPages = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);
        return(
            <Users
                {...this.props}
                totalUsersPages={totalUsersPages}
                setCurrentPage={this.setCurrentPage}
                toggleFollowButton={this.toggleFollowButton}
                followUser={this.followUser}
                unFollowUser={this.unFollowUser}
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
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setTotalUsersCount: (count)=>{
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        togglePreLoader: () =>{
            dispatch(togglePreLoaderAC())
        },
        toggleFollowButton: (userId) =>{
            dispatch(toggleFollowButtonAC(userId))
        },
        toggleFollowFetching: (userId) =>{
            dispatch(toggleFollowFetchingAC(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);