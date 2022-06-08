import style from './Login.module.scss'

const Login = props =>{
    return(
        <section className={style.loginForm}>
            <input type="text" placeholder='логин' className={style.login}/>
            <input type="text" placeholder='пароль' className={style.password}/>
            <input type="text" placeholder='ВОЙТИ' className={style.button}/>
        </section>
    )
}

export default Login;