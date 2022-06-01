const Users = (props) =>{
    return(
        <>
            {props.page}
            <button onClick={ ()=>{
                props.incrementPage();
            } }>
                Increment
            </button>
        </>
    )
}
export default Users;