import axios from "axios";

const Users = (props) =>{
    return(
        <section>
            total: {props.totalUsersCount}
            <br/>
            on page: {props.usersOnPage}
            <br/>
            total users pages: {props.totalUsersPages}
        </section>
    )
}
export default Users;