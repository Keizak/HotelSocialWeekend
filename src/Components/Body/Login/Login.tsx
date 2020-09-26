import React from 'react';
import style from './css.module.css';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {connect, useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/Redux-Store";
import {Redirect} from "react-router-dom";
import {goLoginTC} from "../../../Redux/Auth-reduser";
import {LoginDataType} from "../../../Api/Api";
import {maxLengthCreator, requiredField} from "../../../Utils/Validators/Validators";
import {Input, TextArea} from "../../../CommonComponents/FormControl/FormsControl";

type LoginFormOwnProps = {
    captchaUrl?: string | null
}
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    Password: string
    Email: string
}
const maxlengthEmail = maxLengthCreator(30)
let LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = (props:any) => {
    debugger
    return (
        <div className={style.main}>
            Login
            <form className={style.form} onSubmit={props.handleSubmit}>
                <div className={style.inputText}>
                    <Field  placeholder="Email"
                            name="Email"
                            component={Input}
                            type="text"
                            validate={[requiredField,maxlengthEmail]}/>
                </div>
                <div className={style.inputText}>
                    <Field placeholder="Password"
                           name="Password"
                           component={Input}
                           type="password"
                           validate={[requiredField,maxlengthEmail]}/>
                </div>
                <div>
                    <Field  component="input" name="rememberMe" type="checkbox" /> RememberMe
                </div>
                {props.error ? <div className={style.commonError}>{props.error}</div> : null}
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
    const userId = useSelector<AppRootStateType, number>(state => state.auth.userData.id)
    const onSubmit = (formData: LoginFormValuesType) => {
        props.goLoginTC({email: formData.Email, password:formData.Password});
    }

    if (props.isAuth) {
        return <Redirect to={`/Profile/${userId}`}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isLogin
})

export default connect(mapStateToProps, {goLoginTC})(Login);
