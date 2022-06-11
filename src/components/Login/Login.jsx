import style from './Login.module.scss'
import { Form, Field } from 'react-final-form'



const LoginForm = props =>{
    const onSubmit = (value) =>{
        props.logIn(value.login, value.password, value.rememberMe)
    }
    return(
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) =>(
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <Field name={'login'} type="text" component="input" placeholder='почта' className={style.login}/>
                    <Field name='password' type="text" component="input" placeholder='пароль' className={style.password}/>
                    <Field name='rememberMe' type="checkbox" component="input" className={style.checkBox}/>
                    <button type="submit" className={style.button}>Войти</button>
                </form>
                )
            }
        />
    )
}

const Login = props =>{
    return(
        <section>
            <LoginForm logIn={props.logIn}/>
        </section>
    )
}



export default Login;