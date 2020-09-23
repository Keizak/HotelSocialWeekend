import React from 'react';
import style from './css.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {Redirect} from "react-router-dom";
import {goLoginTC} from "../../../Redux/Auth-reduser";
import {LoginDataType} from "../../../Api/Api";

type LoginFormOwnProps = {
    captchaUrl?: string | null
}
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

let LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = (props:any) => {
    return (
        <div className={style.main}>
            Login
            <form className={style.form} onSubmit={props.handleSubmit}>
                <div className={style.inputText}>
                    <Field  placeholder="Login" name="Login" component="input" type="text" />
                </div>
                <div className={style.inputText}>
                    <Field placeholder="Password" name="Password" component="input" type="password" />
                </div>
                <div>
                    <Field  component="input" name="rememberMe" type="checkbox" /> RememberMe
                    {/*<label htmlFor={"remember"}>remember me</label>*/}
                </div>
                <div className={style.buttons}>
                    <div className={style.buttonRegister}>
                        <button>Sigh Up</button>
                    </div>
                    <div className={style.buttonLogin}>
                        <button>Sign In</button>
                    </div>
                </div>
            </form>
        </div>

    )

}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    goLoginTC: (data:LoginDataType) => void
}


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.goLoginTC({email: formData.email, password:formData.password});
    }

    if (props.isAuth) {
        return <Redirect to={"/"}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isLogin
})

export default connect(mapStateToProps, {goLoginTC})(Login);
