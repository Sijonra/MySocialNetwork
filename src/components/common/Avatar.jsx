import style from './common.module.scss';

const Avatar = (props) =>{
    return(
        <div className={style.avatar}>
            <img src={props.avatarLink} alt="" />
        </div>
    )
}

export default Avatar;