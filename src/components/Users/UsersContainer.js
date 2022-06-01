import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/usersPageReducer";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            this.props.setTotalUsersCount(response.data.totalCount);
        })

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response=>{
            this.props.setUsers(response.data.items);
        })
    }

    setCurrentPage = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersOnPage}`).then(response=>{
            //console.log(response.data.items);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render(){
        let totalUsersPages = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);
        return(
            <Users
                {...this.props}
                totalUsersPages={totalUsersPages}
                setCurrentPage={this.setCurrentPage}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);