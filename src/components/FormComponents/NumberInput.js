import React from 'react';
import {InputNumber} from 'antd';
import FormItem from "antd/es/form/FormItem";

export default class TextInput extends React.Component {
    render() {
        const {input, type = "text", prefix, placeholder,label,...rest} = this.props
        const {touched, valid, error} = this.props.meta
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"}>
                {label ? <p className="field-label">{label}</p> : null}
                <InputNumber {...input} {...rest} type={type} prefix={prefix}/>
            </FormItem>
        )
    }
}
