import style from './Posts.module.scss'
import Post from "./Post/Post";
import Avatar from "../../common/Avatar";
import avatar from '../../../assets/avatar.jpg'

const Posts = () =>{
    return(
        <>
            <div className={style.postInput}>
                <Avatar avatarLink={avatar} />
                <input type="text" className={style.input} placeholder='Введите текст поста...'/>
                <button className={style.sendPost}>Отправить</button>
            </div>
            <div className={style.postsWrapper}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}

export default Posts;