import React from 'react';
import {reduxForm} from "redux-form";
import TextField from "../components/FormComponents/TextField";
import LoginButton from "../components/FormComponents/LoginButton";


class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <TextField name='email' label="E-mail"/>
                <br/>
                <TextField name='password' label="Password"/>
                <br/>
                <LoginButton raised={true}>Kaydet</LoginButton>
            </div>
        )
    }
}

export default reduxForm({
    form: 'frm_user_login'
})(LoginForm)