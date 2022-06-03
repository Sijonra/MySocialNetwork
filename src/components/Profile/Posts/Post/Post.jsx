import style from './Post.module.scss'
import avatar from '../../../../assets/postAvatar.png'
import Avatar from "../../../common/Avatar";


const Post = props =>{
    return(
        <div className={style.post}>
            <div className={style.avatar}>
                <Avatar avatarLink={avatar}/>
            </div>
            <div className={style.content}>
                <div className={style.userName}>
                    Егор Летов
                    <p className={style.time}>
                        8 минут назад
                    </p>
                </div>
                <p className={style.text}>
                    Всем привет, меня зовут Антон Кострюков и я очень крутой чувк!!!
                </p>
                <div className={style.postReacts}>
                    <div className={style.likes}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_404_51)">
                                <path d="M6.24984 3.33333C3.71859 3.33333 1.6665 5.38541 1.6665 7.91666C1.6665 12.5 7.08317 16.6667 9.99984 17.6358C12.9165 16.6667 18.3332 12.5 18.3332 7.91666C18.3332 5.38541 16.2811 3.33333 13.7498 3.33333C12.1998 3.33333 10.829 4.10291 9.99984 5.28083C9.5772 4.67883 9.01574 4.18753 8.36298 3.84853C7.71021 3.50953 6.98538 3.33281 6.24984 3.33333Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_404_51">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>12</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post;