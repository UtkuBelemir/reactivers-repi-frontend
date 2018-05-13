import React from 'react';
import {Input} from 'antd';
import FormItem from "antd/es/form/FormItem";

export default class TextInput extends React.Component {
    render() {
        const {input, type = "text", prefix,style, placeholder,label,...rest} = this.props
        const {touched, valid, error} = this.props.meta
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"} style={style}>
                {label ? <p className="field-label">{label}</p> : null}
                <Input {...input} {...rest} type={type} prefix={prefix} placeholder={placeholder}/>
            </FormItem>
        )
    }
}
