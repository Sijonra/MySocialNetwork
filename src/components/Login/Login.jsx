import style from './Login.module.scss'
import {Formik} from "formik";
import {Navigate} from "react-router";


const LoginForm = props =>{
    return(
        <>
            <Formik
                initialValues={{email: '', password: '',}}
                onSubmit={values => {
                    let checked = false;
                    if(values.rememberMe) values.rememberMe[0] === 'on' ? checked = true : checked = false;
                    props.logIn(values.email, values.password, checked);
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Обязательное поле';
                    }
                    else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Неправильный адрес почты';
                    }
                    if(!values.password){
                        errors.password = 'Обязательное поле';
                    }
                    return errors;
                }}
            >
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit, isSubmitting,
                     }) =>(
                        <form className={style.loginForm} onSubmit={handleSubmit}>
                            <input
                                name='email'
                                placeholder='почта'
                                className={style.login}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className={style.error}>{errors.email && touched.email && errors.email}</p>
                            <input
                                name='password'
                                placeholder='пароль'
                                className={style.password}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className={style.error}>{errors.password && touched.password && errors.password}</p>
                            <input
                                name='rememberMe'
                                type="checkbox"
                                className={style.checkBox}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className={style.button}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            >
                                Войти
                            </button>
                        </form>
                    )
                }
            </Formik>
        </>
    )
}

const Login = props =>{
    if(props.isLoggedIn) return <Navigate to={'/profile/' + props.userId} />
    return(
        <section>
            <LoginForm logIn={props.logIn}/>
        </section>
    )
}



export default Login;