import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {setTotalUsersCountAC} from "../../redux/usersPageReducer";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        const getTotalUsersCount = () =>{
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                console.log(response.data.totalCount);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        }
        getTotalUsersCount()

    }

    render(){
        let totalUsersPages = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage);
        return(
            <Users
                {...this.props}
                totalUsersPages={totalUsersPages}
                setTotalUsersCount={this.props.setTotalUsersCount}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return(
        {
            totalUsersCount: state.usersPage.totalUsersCount,
            usersOnPage: state.usersPage.usersOnPage,
        }
    )
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setTotalUsersCount: (count)=>{
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);