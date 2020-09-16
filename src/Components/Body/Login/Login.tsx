import React from 'react';
import style from './css.module.css';
import {Field, reduxForm} from "redux-form";

type LoggoutType = {

 }


function Login(props:LoggoutType) {
  return (
      <div className={style.main}>
          Login
          <form>
              <div><Field placeholder={"Login"} component={"input"}/></div>
              <div><input placeholder={"Password"}/></div>
              <div><input type={"checkbox"}/>remember me</div>
              <div><button>login</button></div>
          </form>
      </div>

)

}


const reduxLoginForm = reduxForm({
    form: 'loginPage'
})(Login)

export default Login;
