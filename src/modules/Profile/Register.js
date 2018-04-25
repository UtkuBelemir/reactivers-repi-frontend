import LogoPlaceHolder from '../../assets/logoph.png';
import React from 'react';
import {Form, Icon, Input, Select, Button, Checkbox, Card} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {reduxForm, Field} from "redux-form";
import {validateEmail} from '../../utils/utils'
import {postData} from '../../utils/reduxfunctions/actions'
import {connect} from "react-redux";
const InputGroup = Input.Group;
const Option = Select.Option;
const validate = (values) => {
    let errors = {}
    if (values.email == null) {
        errors.email = "Lütfen E-mail Adresinizi Girin"
    } else {
        if (!validateEmail(values.email)) {
            errors.email = "E-mail Adresi Geçerisiz"
        }
    }
    if (values.password == null) {
        errors.password = "Lütfen Şifrenizi Girin"
    }else{
        if (values.password.length < 6) {
            errors.password = "Şifre 6 Karakterden Uzun Olmalı"

        }else{
            if (values.password !== values.password_check) {
                errors.password = "Şifreler Uyuşmuyor"
                errors.password_check = "Şifreler Uyuşmuyor"
            }
        }
    }
    if(values.phone_number == null){
        errors.phone_number = 'Lütfen Telefon Numranızı Girin'
    }else{
        if(values.phone_number.length < 8){
            errors.phone_number = 'Telefon Numarası Geçersiz'
        }
    }
    return errors
}

class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.inputField = this.inputField.bind(this);
    }
    componentWillMount(){
        this.props.initialize({ phone_number_pre: '+90' });
    }
    inputField(p) {

        return <FormItem help={p.meta.touched && !p.meta.valid ? p.meta.error : ""}
                         style={p.style}
                         validateStatus={p.meta.touched && !p.meta.valid ? "error" : "success"}><Input {...p.input} type={p.type} prefix={p.prefix} placeholder={p.placeholder}/></FormItem>
    }
    selectField(p) {
        return (
                <Select {...p.input} showSearch={true} style={{marginBottom : 24,flex : '0 0 150px'}}>
                    <Option value="+93">Afghanistan(+93)</Option>
                    <Option value="+35">Albania(+35)</Option>
                    <Option value="+21">Algeria(+21)</Option>
                    <Option value="+68">American Samoa(+68)</Option>
                    <Option value="+37">Andorra(+37)</Option>
                    <Option value="+24">Angola(+24)</Option>
                    <Option value="+80">Anguilla(+80)</Option>
                    <Option value="+26">Antigua(+26)</Option>
                    <Option value="+54">Argentina(+54)</Option>
                    <Option value="+37">Armenia(+37)</Option>
                    <Option value="+29">Aruba(+29)</Option>
                    <Option value="+24">Ascension Island(+24)</Option>
                    <Option value="+90">Türkiye(+90)</Option>
                </Select>
        )
    }
    render() {
        return (
            <div style={{minHeight: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card title={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                    src={LogoPlaceHolder} height={64} alt="Logo"/></div>} style={{width: 500,margin : 32}}>
                    <div style={{padding: '1px 0px 1px 0px'}}>
                        <Field type="email" name="email" component={this.inputField}
                               prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="E-Mail"/>
                    </div>
                    <div style={{padding: '1px 0px 1px 0px',display : 'flex',justifyContent : 'space-between',alignItems : 'center'}}>
                        <Field name="name" component={this.inputField}
                               prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Ad"/>
                        <Field name="surname" component={this.inputField}
                               prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Soyad"/>
                    </div>
                    <div style={{padding: '1px 0px 1px 0px',display : 'flex',justifyContent : 'center',alignItems : 'center'}}>
                        <Field type="phone" name="phone_number_pre" component={this.selectField} placeholder="E-Mail"/>
                        <Field type="tel" name="phone_number" component={this.inputField} style={{flex : 4}}
                               prefix={<Icon type="phone" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Phone Number"/>
                    </div>
                    <div style={{marginBottom: 12, padding: '1px 0px 1px 0px'}}>
                        <Field type="password" name="password" component={this.inputField}
                               prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder={"Şifre"}/>
                    </div>
                    <div style={{marginBottom: 12, padding: '1px 0px 1px 0px'}}>
                        <Field type="password" name="password_check" component={this.inputField}
                               prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder={"Şifre"}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                                onClick={ () => this.props.postData({
                                    form : 'frm_user_register',
                                    params : {apiEndPoint : 'signup'},
                                })}
                                disabled={!this.props.anyTouched || !this.props.valid}>
                            Kayıt Ol
                        </Button> <a onClick={ () => this.props.history.push("/login")}>Hesabınız var mı?</a>
                    </div>
                </Card>
            </div>
        )
    }
}

export default reduxForm({form: 'frm_user_register', validate})(connect(null,{postData})(UserRegister))
