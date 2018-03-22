import LogoPlaceHolder from '../../assets/logoph.png';
import React from 'react';
import {Icon, Button, Card} from 'antd';
import {reduxForm,Field} from "redux-form";
import {validateEmail} from '../../utils/utils'
import {userLogin} from "../../utils/reduxfunctions/actions";
import {connect} from "react-redux";
import TextInput from '../../components/FormComponents/TextInput'
const validate = (values) => {
    let errors = {}
    if(values.email == null){
        errors.email = "Lütfen E-mail Adresinizi Girin"
    }else{
        if(!validateEmail(values.email)){
            errors.email = "E-mail Adresi Geçerisiz"
        }
    }
    if(values.password == null){
        errors.password = "Lütfen Şifrenizi Girin"
    }
    return errors
}
class UserLogin extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{minHeight : 'inherit',display : 'flex',justifyContent : 'center',alignItems : 'center'}}>
            <Card title={<div style={{display : 'flex',justifyContent : 'center',alignItems : 'center'}}><img src={LogoPlaceHolder} height={64} alt="Logo"/></div>} style={{ width: 350,margin : 32 }}>
                <div style={{padding : '1px 0px 1px 0px'}}>
                    <Field type="email" name="email" component={TextInput} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={"E-Mail"} />
                </div>
                <div style={{ marginBottom : 12,padding : '1px 0px 1px 0px'}}>
                    <Field type="password" name="password" component={TextInput} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={"Şifre"} />
                    <a className="login-form-forgot" href="">Şifremi unuttum</a>
                </div>
                <div style={{display : 'flex',alignItems : 'center',justifyContent : 'space-between'}}>
                <Button onClick={ () => this.props.userLogin( () => this.props.history.push("/profile/main"))} type="primary" htmlType="submit" className="login-form-button" disabled={!this.props.anyTouched || !this.props.valid}>
                    Giriş Yap
                </Button> <a onClick={ () => this.props.history.push("/register")}>Kayıt ol!</a>
                </div>
            </Card>
            </div>
        )
    }
}
export default reduxForm({ form : 'frm_user_login',validate})(connect(null,{userLogin})(UserLogin))
