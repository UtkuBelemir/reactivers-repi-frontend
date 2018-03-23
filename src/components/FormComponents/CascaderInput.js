import React from 'react';
import {Cascader} from 'antd';
import FormItem from "antd/es/form/FormItem";


export default class CascaderInput extends React.Component {
    render() {
        const {placeholder,label,...propsRest} = this.props
        const {touched, valid, error} = this.props.meta
        const {...inputRest} = this.props.input
        return (
            <FormItem help={touched && !valid ? error : ""}
                      validateStatus={touched && !valid ? "error" : "success"}>
                {label ? <p className="field-label">{label}</p> : null}
                <Cascader {...inputRest} {...propsRest} placeholder={placeholder} />
            </FormItem>
        )
    }
}
