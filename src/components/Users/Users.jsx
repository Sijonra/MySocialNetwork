import style from './Users.module.scss'
import Loader from "../common/Loader";
import {NavLink} from "react-router-dom";

const Users = (props) =>{

    let pagesPagination = [];
    for(let i = 1; i <= props.totalUsersPages; i++){
        pagesPagination[i] = i;
    }

    return(
        <div className={style.usersPage}>
            <div>
                {props.preLoader ? <Loader/> : null}
            </div>
            <div className={style.pagination}>
                {
                    pagesPagination.map(element=>{
                        return(
                            <span
                                key={element}
                                className={props.currentPage === element ? style.paginationItemActive : style.paginationItem}
                                onClick={()=>{props.setCurrentPage(element)}}
                            >
                                {element}
                            </span>
                        )
                    })
                }
            </div>
            <div className={style.users}>
                {props.users.map(user=>{
                    return(
                        <div key={user.id}>
                            <div key={user.id} className={ props.preLoader ?  style.loading : style.user}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small ? user.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'} alt="" className={style.userAvatar}/>
                                </NavLink>
                                <div className={style.userInfo}>
                                    <p className={style.userName}>{user.name}</p>
                                    <p className={style.userId}>@{user.id}</p>
                                    <p className={style.userStatus}>
                                        {user.status ? user.status : 'Пользователь не добавил статус'}
                                    </p>
                                </div>
                                {
                                    user.followed ?
                                        <button
                                            disabled={props.followFetching.some(id => id === user.id)}
                                            className={props.followFetching.some(id => id === user.id) ? style.followButton + " " + style.disabled : style.followButton}
                                            onClick={()=>{
                                                props.unFollowUser(user.id);
                                            }}>
                                            Unfollow
                                        </button>
                                        :
                                        <button
                                            disabled={props.followFetching.some(id => id === user.id)}
                                            className={props.followFetching.some(id => id === user.id) ? style.followButton + " " + style.disabled : style.followButton}
                                            onClick={()=>{
                                                props.followUser(user.id);
                                            }}>
                                            follow
                                        </button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Users;