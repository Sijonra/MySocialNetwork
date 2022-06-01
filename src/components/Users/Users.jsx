import style from './Users.module.scss'

const Users = (props) =>{

    let pagesPagination = [];
    for(let i = 1; i <= props.totalUsersPages; i++){
        pagesPagination[i] = i;
    }

    return(
        <section>
            total: {props.totalUsersCount}
            <br/>
            on page: {props.usersOnPage}
            <br/>
            total users pages: {props.totalUsersPages}
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
                        <div key={user.id} className={style.user}>{user.name}</div>
                    )
                })}


            </div>
        </section>
    )
}
export default Users;