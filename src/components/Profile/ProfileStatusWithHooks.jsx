import React from "react";
import style from "./Profile.module.scss";
import {useState} from "react";

const ProfileStatusWithHooks = props =>{

    let statusRef = React.createRef()

    let [editeMode, setEditMode] = useState(false)
    let [statusInputValue, setStatusInputValue] = useState(props.status ? props.status : '')

    let activateEditMode = () => {
        if(parseInt(props.currentUserId) === props.userId){
            setEditMode(true)
        }
    }

    let updateStatus = () =>{
        setEditMode(false)
        props.updateUserStatus(statusRef.current.value)
    }

    let deactivateEditeMode = () =>{
        setEditMode(false)
        props.updateUserStatus(statusRef.current.value)
    }

    let handleInputChange = () => setStatusInputValue(statusRef.current.value);

    return(
        <>
            {
                editeMode
                    ?
                    <>
                        <input value={statusInputValue} onChange={handleInputChange} onBlur={deactivateEditeMode} ref={statusRef} type="text" className={style.statusInput}  autoFocus={true}/>
                        <button onClick={updateStatus}>Сохранить</button>
                    </>
                    :
                    <>
                        <p onDoubleClick={activateEditMode} className={!props.status ? style.noStatus : style.status}>{!props.status ? 'введите ваш статус' : props.status}</p>
                    </>
            }
        </>
    )
}

export default ProfileStatusWithHooks;