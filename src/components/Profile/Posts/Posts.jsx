import React from 'react'
import style from './Posts.module.scss'
import Post from "./Post/Post"
import Avatar from "../../common/Avatar"
import avatar from '../../../assets/avatar.jpg'

const Posts = props =>{
    let newPostElement = React.createRef();
    return(
        <>
            <div className={style.postInput}>
                <Avatar avatarLink={avatar} />
                <input
                    ref={newPostElement}
                    type="text" className={style.input}
                    placeholder='Введите текст поста...'/>
                <button
                    className={style.sendPost}
                    onClick={()=>{
                        console.log(newPostElement.current.value)
                        props.handleAddPost(newPostElement.current.value, 12);
                    }}
                >
                    Отправить
                </button>
            </div>
            <div className={style.postsWrapper}>
                {props.posts.map(post =>{
                    return(
                        <Post key={post.id} text={post.text} likes={post.likes}/>
                    )
                })}
            </div>
        </>
    )
}

export default Posts;