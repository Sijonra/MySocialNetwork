import style from "./common.module.scss";

const ProfileAvatar = props =>{
    return(
        <div className={style.profileAvatar}>
            <img src={props.avatarLink} alt="" />
        </div>
    )
}

export default ProfileAvatar;